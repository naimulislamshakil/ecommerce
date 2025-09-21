const jwt = require('jsonwebtoken');
const UserModal = require('../Schema/user.schema');

class UserService {
	constructor(userModel) {
		this.userModel = userModel;
	}

	generateAccessToken(user) {
		return jwt.sign(
			{ id: user._id, email: user.email },
			process.env.ACCESSCODE,
			{
				expiresIn: '1h',
			}
		);
	}

	generateRefreshToken(user) {
		return jwt.sign(
			{ id: user._id, email: user.email },
			process.env.REFFRESSCODE,
			{
				expiresIn: '7d',
			}
		);
	}

	async register(userData) {
		const { email } = userData;
		const isUserExist = await UserModal.findOne({ email });

		if (isUserExist) {
			throw new Error('User Already Exist. Please Login....');
		}

		const user = await UserModal.create(userData);

		return user;
	}
}

module.exports = UserService;
