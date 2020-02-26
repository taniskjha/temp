const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

//Import User Models
const Users = require('../models/users');
//Sending The Data
router.post(
	'/reg',
	[
		check('email').isEmail().withMessage('Please Enter Valid Email'),
		check('password').isLength({ min: 6 }).withMessage('Password Length should be more than 6 characters'),
		check('address').notEmpty().withMessage('Enter Your Address')
	],
	(req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(422).json({ errors: errors.array() });
		} else {
			let users = req.body;
			const newuser = new Users(users);
			newuser.save((err) => {
				if (err) {
					console.error('Something went wrong');
				}
				res.send(newuser);
			});
		}
	}
);
//Get the data

router.get('/get', (req, res) => {
	Users.find({}, (err, data) => {
		if (err) {
			throw err;
		}
		res.send(data);
	});
});

// Delete the data

router.delete('/del/:_id', (req, res) => {
	Users.remove({ email: req.params._id }, (err) => {
		if (err) {
			console.log(err)
		} else {
			res.send(`successfully deleted`);
		}
	})
})

// update the data

router.put('/edit/:id', (req, res) => {
	Users.findById(req.params.id, (err, user_data) => {
		if (err) {
			console.log(err)
		} else {
			user_data.password = req.body.password;
			user_data.email = req.body.email;
			user_data.save((err) => {
				if (err) {
					console.log(err)
				} else {
					res.send(user_data);
				}
			})
		}
	})
})

module.exports = router;
