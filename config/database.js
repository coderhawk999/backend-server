const mongoose = require('mongoose');

const db_URI = "dburihere";

const options = {
	reconnectTries: Number.MAX_VALUE,
	poolSize: 10
};

mongoose.connect(db_URI, options).then(
	() => {
		console.log("Database Connection Established");
	},
	err => {
		console.log("Error Connecting to Database. Error : ", err);
	}
);

