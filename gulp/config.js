// @file config.js

'use strict';

var webpack = require('webpack');
var path = require('path');
var current = process.cwd();

var dir = {
    src: {
        template: './app/template',
        html: './app/html',
        scss: './app/scss',
        js: './app/js',
        img: './app/img'
    },
    dest: {
        template: './appengine/template',
        html: './appengine/static/html',
        css: './appengine/static/css',
        js: './appengine/static/js',
        img: './appengine/static/img',
        fonts: './appengine/static/fonts'
    }
};

var webpackSettings = {
    entry: {
        main: dir.src.js + '/main.js'
    },
    output: {
        filename: '[name].js',
        publicPath: '/js/'
    },
    resolve: {
        extensions: ['', '.js'],
        root: [
            path.join(current, 'bower_components'),
            path.join(current, dir.src.js, 'modules')
        ]
    }
};

module.exports = {

    // js
    js: {
        src: dir.src.js + '/**',
        dest: dir.dest.js
    },

    // webpack
    webpack: {
        entry: webpackSettings.entry,
        output: webpackSettings.output,
        resolve: webpackSettings.resolve,
        debug: false,
        devtool: false,
        stats: {
            colors: true,
            reasons: false
        },
        plugins: [
            new webpack.ResolverPlugin(
                new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('.bower.json', ['main'])
            ),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin(),
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.optimize.AggressiveMergingPlugin(),
            new webpack.ProvidePlugin({
                jQuery: "jquery",
                $: "jquery"
            })
        ],
        module: {
            loaders: [
                {test: /\.html$/, loader: 'html?minimize'}
            ]
        }
    },

    webpackDev: {
        entry: webpackSettings.entry,
        output: webpackSettings.output,
        resolve: webpackSettings.resolve,
        cache: true,
        debug: true,
        devtool: false,
        stats: {
            colors: true,
            reasons: false
        },
        plugins: [
            new webpack.ResolverPlugin(
                new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('.bower.json', ['main'])
            ),
            new webpack.NoErrorsPlugin(),
            new webpack.ProvidePlugin({
                jQuery: "jquery",
                $: "jquery"
            })
        ],
        module: {
            loaders: [
            ]
        }
    },

    clean: [
        dir.dest.template,
        dir.dest.html,
        dir.dest.fonts,
        dir.dest.img,
        dir.dest.css,
        dir.dest.js
    ],

    template: {
        src: dir.src.template + '/**/*.html',
        removeComments: true,
        collapseWhitespace: true,
        removeEmptyAttributes: false,
        collapseBooleanAttributes: true,
        removeRedundantAttributes: true,
        dest: dir.dest.template
    },

    html: {
        src: dir.src.html + '/**/*.html',
        removeComments: true,
        collapseWhitespace: true,
        removeEmptyAttributes: false,
        collapseBooleanAttributes: true,
        removeRedundantAttributes: true,
        dest: dir.dest.html
    },

    scss: {
        src: [
            dir.src.scss + '/**/*.scss',
            '!' + dir.src.scss + '/**/_*.scss',
        ],
        dest: path.join(current, dir.dest.css)
    },

    img: {
        src: dir.src.img + '/**/*',
        dest: dir.dest.img
    },

    fonts: {
        src: "./bower_components/bootstrap-sass-official/assets/fonts/**/*",
        dest: dir.dest.fonts
    },

    watch: {
        template: dir.src.template + '/**',
        html: dir.src.html + '/**',
        scss: dir.src.scss + '/**',
        js: dir.src.js + '/**',
        img: dir.src.img + '/**'
    }
}