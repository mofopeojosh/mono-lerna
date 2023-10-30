export const colors = {
	black: '#000',
		gray: {
		90: '#0e0e0e',
			80: '#181818',
			70: '#56565b',
			50: '#797b86',
			10: '#f8f8f9',
			'03': '#f7f7f7',
	},
	white: '#fff',
		primary: '#5e79c5',
		brand: {
		DEFAULT: '#2360ff',
			'-hover': '#3f74ff',
	},
	danger: {
		DEFAULT: '#ed6c6c',
			'-hover': '#f03838',
	},
	red: '#f03838',
		green: '#2fb254',
		yellow: {
		light: '#fbe9ba',
			dark: '#dfb77a',
	},
	cyan: {
		light: '#d0dcfb',
			1: '#224373',
			2: '#555fa3',
			3: '#8a92ce',
			4: '#c6cbed',
	},
	purple: {
		1: '#5d3251',
			2: '#635563',
			3: '#af8fb6',
			4: '#dcd2dc',
	},
	gold: {
		1: '#c67702',
			2: '#e0a029',
			3: '#dfb77a',
			4: '#eddfc5',
			5: '#f9f6f0',
	},
	background: '#f7f7f7',
		card: '#fff',
		'over-card': {
		DEFAULT: '#f8f8f9',
			'-hover': '#e8e9ef',
	},
	text: {
		DEFAULT: '#161a21',
			'-hover': '#2a2a2c',
	},
	'sub-text': '#45454a',
		border: {
		DEFAULT: '#d6d8e1',
			light: 'rgba(90, 90, 90, 0.1)',
			image: 'rgba(0, 0, 0, 0.09)',
	},
	shadow: {
		4: 'var(--shadow-4)',
			8: 'var(--shadow-8)',
			10: 'var(--shadow-10)',
			15: 'var(--shadow-15)',
			16: 'var(--shadow-16)',
			50: 'var(--shadow-50)',
			elevated: 'var(--shadow-elevated)',
	},
	transparent: {
		DEFAULT: 'transparent',
			middle: 'rgba(121, 123, 134, 0.5)',
			'middle-20': 'rgba(121, 123, 134, 0.2)',
			'middle-30': 'rgba(121, 123, 134, 0.3)',
			'yellow-20': 'rgba(223, 183, 122, 0.2)',
			'brand-20': 'rgba(35, 96, 255, 0.2)',
			'danger-20': 'rgba(240, 56, 56, 0.2)',
	},
};

const theme =  {
	extend: {},
	colors,
};
export default theme;
