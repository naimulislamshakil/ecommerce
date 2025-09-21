const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			require: true,
			trim: true,
		},
		email: {
			type: String,
			require: true,
			unique: true,
			lowercase: true,
		},
		password: {
			type: String,
			require: true,
			minlength: 6,
		},
		role: {
			type: String,
			enum: ['user', 'admin'],
			default: 'user',
		},
		orders: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Order',
			},
		],
		address: {
			address_line1: String,
			address_line2: String,
			city: String,
			state: String,
			ZipCode: String,
			country: String,
		},
		delivery_address: {
			address_line1: String,
			address_line2: String,
			city: String,
			state: String,
			ZipCode: String,
			country: String,
		},
		dob: Date,
		gender: String,
		primary_number: String,
		secendary_number: String,
		profile_img: String,
		refreshToken: String,
	},
	{
		timestamps: true,
	}
);

userSchema.pre('save', function (next) {
	if (!this.isModified('password')) return next();

	const hashPassword = bcrypt.hashSync(this.password, 10);
	this.password = hashPassword;
	next();
});

const UserModal = mongoose.model('User', userSchema);

module.exports = UserModal;
