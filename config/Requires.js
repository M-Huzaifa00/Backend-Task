const express = require('express');
const BlogStatRoute = require('../Routes/BlogStat');
const { BlogSearch } = require('../Routes/BlogSearch');
module.exports = (app) => {
    app.use(express.json());
    app.use('/api',BlogStatRoute);
    app.use('/api',BlogSearch);
}