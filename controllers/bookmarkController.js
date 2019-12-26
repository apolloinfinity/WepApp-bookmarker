const Bookmark = require('../models/bookmarkModel');

exports.getBookmarks = async (req, res) => {
	try {
		const bookmarks = await Bookmark.find({});
		res.render('index', {
			bookmarks: bookmarks
		});
	} catch (err) {
		throw err;
	}
};

exports.postBookmark = async (req, res) => {
	try {
		const { name, url } = await req.body;
		const bookmark = Bookmark({
			name,
			url
		});

		const checkURL = await Bookmark.findOne({ url: url });
		if (checkURL) {
			console.log('That bookmark exists already!');
		} else {
			bookmark.save();
			console.log('Saved');
		}

		res.redirect('/');
		res.status(201).send().end();
	} catch (err) {
		throw err;
	}
};

exports.deleteBookmark = async (req, res) => {
	try {
		const id = await req.params.id;
		const results = await Bookmark.deleteOne({ _id: id });
		console.log(results);
		res.status(200).send(Bookmark.deletedCount);
	} catch (err) {
		throw err;
	}
};
