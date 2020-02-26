const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://taniskjha:Dci8G7nsHEgiibpr@clustertan-5wvgy.gcp.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (err) => {
	if (err) {
		throw err;
	} else {
		console.log('DB Connected');
	}
});


