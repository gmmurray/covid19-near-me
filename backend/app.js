const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(cors({origin: process.env.CORS_URL}));
app.use(express.json());

app.use('/api', require('./api/'));

app.listen(process.env.PORT || 5000, err => {
    if (err) {
        console.log(err);
    } else {
        console.log('Server is listening...');
    }
});