const mongoose = require('mongoose');

const VisitorDataSchema = new mongoose.Schema({
	cityFrom: {
		type: String,
		require: true,
	},
	cityTo: {
		type: String,
		require: true,
	},
	passengerName: {
		type: String,
		require: true,
	},
	passengerFamilyName: {
		type: String,
		require: true,
	},
	dateDepar: {
		type: Date,
		default: new Date(),
	},
	luggage: {
		type: String,
		require: true,
	},
	class: {
		type: String,
		require: true,
	},
	adults: {
		type: String,
		require: true,
	},
	kids: {
		type: String,
		require: true,
	},
	elders: {
		type: String,
		require: true,
	},
	d: {
		type: String,
	},
	class: {
		type: String,
	},
	selected: {
		type: String,
		require: true,
	},
});

module.exports = mongoose.model('Products', VisitorDataSchema);
