const express = require('express');
const app = express();
require('dotenv').config();

// Task completed by Muhammad Huzaifa Abdulahad 
//Email : huzaifathedeveloper@gmail.com
//whatsapp : +92 3460158151

require('./config/Requires')(app);
require('./config/Server')(app);