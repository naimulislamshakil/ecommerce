const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
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

	async login(userData) {
		const { email, password } = userData;
		const user = await UserModal.findOne({ email });
		if (!user) throw new Error('User Not Found');

		const isMatch = await bcrypt.compareSync(password, user.password);
		if (!isMatch) throw new Error('Invalid credentials');

		const accessToken = this.generateAccessToken(user);
		const refreshToken = this.generateRefreshToken(user);

		user.refreshToken = refreshToken;
		await user.save();

		return { user, accessToken, refreshToken };
	}

	async refreshToken(reToken) {
		if (!reToken) throw new Error('User Not Valid.');
		const decode = jwt.verify(reToken, process.env.REFFRESSCODE);
		const user = await this.userModel.findById(decode.id);

		if (!user || user.refreshToken !== reToken) {
			throw new Error('User Not Valid..');
		}

		const newAccessToken = this.generateAccessToken(user);
		return { accessToke: newAccessToken, user };
	}

	async logout(userId) {
		const user = await this.userModel.findById(userId);
		if (user) {
			user.refreshToken = null;
			await user.save();
		}
		return true;
	}
}

module.exports = UserService;
