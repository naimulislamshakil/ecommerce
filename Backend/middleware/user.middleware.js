const jwt = require('jsonwebtoken');
const UserModal = require('../Schema/user.schema');
const UserControllers = require('../controllers/user.controllers');

const userMiddleware = async (req, res, next) => {
	const accessToken = req.cookies.accessToken;
	const refreshToken = req.cookies.refreshToken;

	if (!accessToken)
		return res.status(401).json({ error: 'Token is missing...' });

	const paylode = jwt.verify(accessToken, process.env.ACCESSCODE);

	if (paylode) {
		req.user = paylode;
		next();
	} else {
		const decoded = jwt.verify(refreshToken, process.env.REFFRESSCODE);

		if (decoded) {
			const user = await UserModal.findById(decoded.id);
			if (!user) return UserControllers.logout();

			const newAccessToken = jwt.sign(
				{ id: user._id, email: user.email },
				process.env.JWT_ACCESS_SECRET,
				{ expiresIn: '15m' }
			);

			res.cookie('accessToken', newAccessToken, {
				httpOnly: true,
				secure: true,
				sameSite: 'strict',
			});

			req.user = refreshDecoded;
			return next();
		} else {
			return UserControllers.logout();
		}
	}
};

module.exports = userMiddleware;
