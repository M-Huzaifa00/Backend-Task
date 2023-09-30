const express = require('express');
const BlogSearch = express.Router();
const { FetchBlogs } = require('../Middleware/FetchBlogs');
const { FilterBySearch } = require('../Helpers/FilterBySearch');
const _ = require('lodash');

const memoizedFilterBySearch = _.memoize((blogs, search) => {
    return FilterBySearch(blogs, search);
}, (blogs, search) => {
    return JSON.stringify(blogs) + search;
}, 600000); // 10min of caching 

BlogSearch.get('/blog-search', [FetchBlogs], (req, res) => {
    const filtredBlogs = memoizedFilterBySearch(req.BLOGS.blogs, req.query.search);

    if (!filtredBlogs) {
        return res.status(400).json({
            Error: {
                message: `Sorry, no blog found with the given keyword '${req.query.search}'`
            }
        });
    }

    res.status(200).json({
        result: [...filtredBlogs]
    });
});

module.exports.BlogSearch = BlogSearch;
