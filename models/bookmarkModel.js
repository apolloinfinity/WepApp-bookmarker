const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookmarkSchema = new Schema({
    bookmarkName: String,
    bookmarkURL: String,
    date: { type: Date, default: Date.now }
});

const Bookmark = mongoose.model('bookmarks', BookmarkSchema);

module.exports = Bookmark; 