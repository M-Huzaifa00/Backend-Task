const axios = require('axios');

const url = 'https://intent-kit-16.hasura.app/api/rest/blogs';
const headers = {
    'x-hasura-admin-secret': '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6',
};

async function FetchBlogs(req, res, next) {
    try {
        const response = await axios.get(url, { headers });
        if (response.status === 200) {
            const data = response.data;
            req.BLOGS = data;
            next();
        } else {
            console.error('Error making GET request:', response.statusText);
            res.status(response.status).json({ message: 'Failed to fetch data.' });
        }
    } catch (error) {
        console.error('Error in making GET request:', error.message);
        res.status(500).json({
            error: {
                message: 'Internal server error',
                details: error, // frontend developer manipulate it according to his own choice
            },
        });
    }
}

module.exports.FetchBlogs = FetchBlogs;
