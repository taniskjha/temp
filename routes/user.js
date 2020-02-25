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

module.exports = router;
