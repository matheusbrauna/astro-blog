/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				hero: "url('https://blog.rocketseat.com.br/content/images/size/w2000/2021/12/banner-principal-2-1.jpg')"
			}
		},
		container: {
			center: true,
			padding: "1rem"
		}
	},
	plugins: [],
}
