module.exports = function(wallaby) {
    var wallabyWebpack;
    var packageConfig;
    var specFilePattern;
    var srcFilePattern;
    var babelProcessor;
    var webpackPostProcessor;

    wallabyWebpack = require('wallaby-webpack');
    packageConfig = require('./package.json');

    specFilePattern = 'src/**/*.spec.js';
    srcFilePattern = 'src/**/*.js*';

    babelProcessor = wallaby.compilers.babel(packageConfig.babel);

    webpackPostProcessor = wallabyWebpack({ });

    return {
        testFramework: 'mocha',
        debug: true,
        workers: {
            initial: 12,
            regular: 2
        },
        files: [
            { pattern: 'node_modules/babel-polyfill/dist/polyfill.js', instrument: false },
            { pattern: srcFilePattern, load: false },
            { pattern: specFilePattern, ignore: true }
        ],
        tests: [
            { pattern: specFilePattern, load: false }
        ],
        compilers: {
            '**/*.js*': babelProcessor
        },
        postprocessor: webpackPostProcessor,
        bootstrap: function() {
            window.__moduleBundler.loadTests();
        }
    };
};