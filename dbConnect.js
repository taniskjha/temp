const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/restapi', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
	if (err) {
		throw err;
	} else {
		console.log('DB Connected');
	}
});
