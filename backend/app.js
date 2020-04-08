const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

require('dotenv').config();

const app = express();

const whitelist = [process.env.CORS_URL];
const corsOptions = {
	origin: (origin, callback) => {
		if (whitelist.indexOf(origin) !== -1) {
			callback(null, true);
		} else {
			callback(new Error('Not allowed by CORS'));
		}
	},
};

if (process.env.NODE_ENV === 'development') app.use(cors());
else app.use(cors(corsOptions));

app.use(express.json());

app.use(helmet());

app.use('/api', require('./api/'));

app.listen(process.env.PORT, (err) => {
	if (err) console.log(err);
	else console.log(`Server is listening on port ${process.env.PORT}...`);
});
