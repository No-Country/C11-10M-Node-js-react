/** @type {import('tailwindcss').Config} */
// const plugin = require("tailwindcss/plugin");

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"input-green": "#D7F0E6",
				"main-green": "#14915E",
				"main-gray": "#E1E2E3",
			},
		},
	},
	plugins: [],
};
