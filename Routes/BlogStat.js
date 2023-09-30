const express = require('express');
const BlogStatRoute = express.Router();
const { FetchBlogs } = require('../Middleware/FetchBlogs');
const { LongestWord } = require('../Helpers/LongesTitle');
const { ContainWord } = require('../Helpers/ContainWord');
const { GetUnique } = require('../Helpers/GetUnique');
const _ = require('lodash');

//memozing each and every helping function output

const memoizedLongestWord = _.memoize((blogs) => {
    return LongestWord(blogs);
}, (blogs) => {
    return JSON.stringify(blogs);
}, 600000); // 10 minutes of caching

const memoizedContainWord = _.memoize((blogs, word) => {
    return ContainWord(blogs, word);
}, (blogs, word) => {
    return JSON.stringify(blogs) + word;
}, 600000); // 10 minutes of caching

const memoizedGetUnique = _.memoize((blogs) => {
    return GetUnique(blogs);
}, (blogs) => {
    return JSON.stringify(blogs);
}, 600000); // 10 minutes of caching

BlogStatRoute.get('/blog-stats', FetchBlogs, (req, res) => {
    const totalBlogs = req.BLOGS.blogs.length;
    const longestTitle = memoizedLongestWord(req.BLOGS.blogs);
    const privacyWordCount = memoizedContainWord(req.BLOGS.blogs, "Privacy");
    const uniqueTitles = memoizedGetUnique(req.BLOGS.blogs);

    res.json({
        totalSize: totalBlogs,
        longestTitle: longestTitle,
        privacyWordCount: privacyWordCount,
        uniqueTitles: [...uniqueTitles]
    });
});

module.exports = BlogStatRoute;
