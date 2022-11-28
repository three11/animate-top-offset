import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

export default {
	input: 'src/animate-top-offset.ts',
	output: {
		dir: 'dist',
		name: 'animateTopOffset',
		format: 'umd',
		exports: 'named',
		sourcemap: true
	},
	plugins: [typescript(), commonjs()]
};
