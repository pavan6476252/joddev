const admin = require('firebase-admin')
const express = require('express')
const router = express.Router()

router.use(
	isAuthenticated = async (req, res, next) => {
		console.log("called is authenticated")
		const token = req.headers.authorization.split(' ')[1];
		try {
			const decodeValue = await admin.auth().verifyIdToken(token);
			if (decodeValue) {
				console.log('firebase-admin-auth', decodeValue)
				req.user = decodeValue;
				return next();
			}
			return res.status(401).json({ message: 'Unauthorized' });
		} catch (error) {
			console.error(error);
			if (error.code === 'auth/id-token-expired') {
				return res.status(401).json({ message: 'Token expired' });
			}
			return res.status(500).json({ message: 'Internal Error' });

		}
	})


module.exports = router