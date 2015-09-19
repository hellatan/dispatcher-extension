/**
 * User: daletan
 * Date: 8/31/15
 * Time: 12:03 PM
 * Copyright 1stdibs.com, Inc. 2015. All Rights Reserved.
 */

'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config');
var sass = require('gulp-sass');
var runSequence = require('run-sequence');

gulp.task('sass-tests', function () {
    runSequence(['run-sass-tests'], 'sass-tests-output');
});

gulp.task('run-sass-tests', function () {
    return gulp.src('./tests/*.scss')
        .pipe(sass({
            sourceComments: true
        }))
        .pipe(gulp.dest('./tests/results'));
});

gulp.task('sass-tests-output', function () {
    return gulp.src('./tests/results/tests.css')
        .on('data', function(chunk) {
            var contents = chunk.contents.toString().trim();
            var bufLength = process.stdout.columns;
            var hr = '\n\n' + Array(bufLength).join("_") + '\n\n'
            if (contents.length > 1) {
                process.stdout.write(chunk.path + '\n' + contents + '\n');
                process.stdout.write(chunk.path + hr);
            }
        });
});

gulp.task('webpack', function (cb) {
    webpack(
        webpackConfig,
        function (err, status) {
            if (err) {
                throw new gutil.PluginError('webpack', err);
            }
            gutil.log('[webpack]', stats.toString({

            }));
            callback();
        }
    )
});


gulp.task('server', function () {
    var compiler = webpack(webpackConfig);
    var port = 5100;

    new WebpackDevServer(compiler, {
            // server and middleware options
        //    contentBase: "http://localhost",
        //    hot: true,
        //    quiet: true,
        //    noInfo: false,
        //    lazy: true,
        //    filename: "bundle.js",
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
        publicPath: '/assets/'
        //stats: {
        //    colors: true
        //}
        }).listen(port, "localhost", function (err) {
            if (err) {
                throw new gutil.PluginError('webpack-dev-server', err);
            }
            gutil.log('[webpack-dev-server]', "http://localhost:" + port + "/webpack-dev-server/index.html");
        });
});
