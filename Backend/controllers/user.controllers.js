const jwt = require('jsonwebtoken');

class UserControllers {
	constructor(userService) {
		this.userService = userService;
	}

	register = async (req, res) => {
		try {
			const user = await this.userService.register(req.body);
			res.status(201).json({ message: 'User registered', user });
		} catch (error) {
			res.status(400).json({ error: error.message });
		}
	};

	login = async (req, res) => {
		try {
			const { user, accessToken, refreshToken } = await this.userService.login(
				req.body
			);

			res.cookie('accessToken', accessToken, {
				httpOnly: true,
				secure: false, // true in production with HTTPS
				sameSite: 'strict',
			});
			res.cookie('refreshToken', refreshToken, {
				httpOnly: true,
				secure: false,
				sameSite: 'strict',
			});

			res.json({ message: 'Login successful', user, accessToken });
		} catch (error) {
			res.status(401).json({ error: error.message });
		}
	};

	refreshToken = async (req, res) => {
		try {
			const reToken = req.cookies.refreshToken;
			const { accessToke, user } = await this.userService.refreshToken(reToken);

			res.json({ accessToke, user });
		} catch (error) {
			res.status(403).json({ error: error.message });
		}
	};

	logout = async (req, res) => {
		try {
			const reToken = req.cookies.refreshToken;

			if (reToken) {
				const decoded = jwt.verify(reToken, process.env.REFFRESSCODE);
				await this.userService.logout(decoded.id);
			}

			res.clearCookie('refreshToken');
			res.json({ message: 'Logged out' });
		} catch (error) {
			res.status(400).json({ error: error.message });
		}
	};
}

module.exports = UserControllers;
