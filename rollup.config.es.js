import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
	moduleName: 'volve',
	entry: 'volve.src.js',
    plugins: [
        babel({
            babelrc: false,
            exclude: './node_modules/**'
        }),
        nodeResolve({
            jsnext: true,
            main: true
        })
    ],
	format: 'es',
	dest: 'volve.es.js'
};
