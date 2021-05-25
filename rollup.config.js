import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
	input: 'src/animate-top-offset.js',
	output: {
		file: 'dist/animate-top-offset.min.js',
		name: 'animateTopOffset',
		format: 'umd'
	},
	plugins: [
		babel({
			exclude: 'node_modules/**',
			babelrc: false,
			presets: [['@babel/env', { modules: false }]]
		}),
		terser()
	]
};
