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
}

module.exports = UserControllers;
