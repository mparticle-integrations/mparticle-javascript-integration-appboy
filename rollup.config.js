import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default [
    {
        input: 'src/AppboyKit-dev.js',
        output: {
            file: 'AppboyKit.js',
            format: 'iife',
            exports: 'named',
            name: 'mpAppboyKit',
            strict: false
        },
        plugins: [
            resolve({
                browser: true
            }),
            commonjs()
        ]
    },
    {
        input: 'src/AppboyKit-dev.js',
        output: {
            file: 'dist/AppboyKit.js',
            format: 'iife',
            exports: 'named',
            name: 'mpAppboyKit',
            strict: false
        },
        plugins: [
            resolve({
                browser: true
            }),
            commonjs()
        ]
    },
    {
        input: 'src/AppboyKit-dev.js',
        output: {
            file: 'npm/AppboyKit.js',
            format: 'cjs',
            exports: 'named',
            name: 'mpAppboyKit',
            strict: false
        },
        plugins: [
            resolve({
                browser: true
            }),
            commonjs()
        ]
    }
]
