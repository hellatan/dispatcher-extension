'use strict';

var path = require('path');
var glob = require('glob');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var babelConfig = {
    optional: ['es6.spec.symbols']
};

var root = path.resolve(__dirname);
var entries = {};
// can't have preceding / in front of `examples/`
// otherwise the path will resolve to `/examples`
// instead of `/Users/.../dibs-styles/examples`
var g = new glob.Glob(path.resolve(root, 'src/entries/**/*.jsx'), {
    sync: true
});

g.found.forEach(function (file) {
    console.log('file: ', file);
    var outputFile = file.replace(root + '/src/entries/', '').replace(/\.jsx?/, '');
    entries[outputFile] = path.resolve(__dirname, file);
});

console.log('entries: ', entries);

module.exports = {
    entry: entries,
    output: {
        path: __dirname + '/assets',
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js',
        publicPath: '/assets'
    },
    devtool: 'inline-source-map',
    //devServer: {
    //    contentBase: './examples',
    //    hot: true,
    //    inline: true
    //},
    module: {
        loaders: [
            {
                test: /\.es\.js|\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: babelConfig
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    "style-loader",
                    // to force non-css modules, use the following line instead:
                    // 'css-loader?importLoaders=1'
                    'css-loader?modules' +
                        '&importLoaders=1' +
                        '&outputStyle=expanded' +
                        '&localIdentName=[name]__[local]___[hash:base64:5]' +
                        '!postcss-loader!sass'
                )
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('main.css', { allChunks: true })
    ],
    postcss: [
        require('autoprefixer-core')
    ]
};