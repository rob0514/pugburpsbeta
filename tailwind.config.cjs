/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Plus Jakarta Sans','Helvetica', 'Arial', 'sans-serif'],
			},
			container: {
				center: true,
			},
			gridAutoColumns: {
				'3fr': 'minmax(33.3%, auto)',
			}
		},
	},
	plugins: [],
}
