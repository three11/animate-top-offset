import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';

export default {
	input: 'src/animate-top-offset.js',
	output: {
		file: 'dist/animate-top-offset.min.js',
		name: 'animateTopOffset',
		format: 'iife'
	},
	plugins: [
		babel({
			exclude: 'node_modules/**',
			babelrc: false,
			presets: [
				['@babel/env', { 'modules': false }]
			]
		}),
		uglify()
	]
};