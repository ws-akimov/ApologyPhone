'use strict';

module.exports = {
	db: 'mongodb://localhost/apologyfm-dev',
	app: {
		title: 'Apologyfm - Development Environment'
	},
	facebook: {
		clientID: process.env.FACEBOOK_ID || '1471771603070167',
		clientSecret: process.env.FACEBOOK_SECRET || '49d59d54076cf4bb87733ddf58b663b0',
		callbackURL: 'http://localhost:3000/auth/facebook/callback'
	},
	twitter: {
		clientID: process.env.TWITTER_KEY || 'BRNXGkdcTgUR3T9ZzFsTJSXhm',
		clientSecret: process.env.TWITTER_SECRET || 'Ltfq8hDljTxI0hXd3WciU3PliEWfkg29FvKAQpZTVURwb80neE',
		callbackURL: 'http://localhost:3000/auth/twitter/callback'
	},
	google: {
		clientID: process.env.GOOGLE_ID || '471338599253-51err5r9gpb6o4c46p3noms4urjqehka.apps.googleusercontent.com',
		clientSecret: process.env.GOOGLE_SECRET || 'WN4lU4CiRThjJcnWVXY5JQur',
		callbackURL: 'http://localhost:3000/auth/google/callback'
	}
};