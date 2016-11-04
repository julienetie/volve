import babel from 'rollup-plugin-babel';

export default {
    moduleName: 'volve',
    entry: 'volve.src.js',
    plugins: [babel({
        babelrc: false,
        presets: ["es2015-rollup"]
    })],
    format: 'umd',
    dest: './volve.js'
};
