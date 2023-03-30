/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			aspectRatio: {
				'golden': '1.618 / 1',
				'rev-golden': '247 / 371'
			  },
			fontFamily: {
				'sans': ['Plus Jakarta Sans','Helvetica', 'Arial', 'sans-serif'],
				'serif': ['Tiempos','Helvetica', 'Arial', 'sans-serif'],
				'logo': ['Poppins','Helvetica', 'Arial', 'sans-serif']
			},
			container: {
				center: true,
			},
			gridAutoColumns: {
				'3fr': 'minmax(33.3%, auto)',
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require("daisyui"),
	],
}
