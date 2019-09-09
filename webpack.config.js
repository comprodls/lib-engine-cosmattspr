const path = require("path");
const webpack = require("webpack");
const { LoaderOptionsPlugin } = require('webpack');

module.exports = {
    entry: {
        cosmattspr: ["./src/js/cosmattspr.js"]
    },
    output: {
        filename: "[name].js",
        path: __dirname + "/dist"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    // for enabling source maps,un-comment the below line
    devtool: "source-map",
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                enforce: "pre",
                test: /\.(jpe?g|png|gif)$/i,   //to support eg. background-image property 
                loader: "file-loader",
                query: {
                    name: '[name].[ext]',
                    publicPath: "./",
                    outputPath: 'assets/kendo/images/'
                    //the images will be emmited to dist/assets/images/ folder 
                    //the images will be put in the DOM <style> tag as eg. background: url(assets/images/image.png);
                }
            }, {
                enforce: "pre",
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,    //to support @font-face rule 
                loader: "url-loader",
                query: {
                    limit: '10000',
                    name: '[name].[ext]',
                    publicPath: "./",
                    outputPath: 'assets/kendo/fonts/'
                    //the fonts will be emmited to dist/assets/fonts/ folder 
                    //the fonts will be put in the DOM <style> tag as eg. @font-face{ src:url(assets/fonts/font.ttf); }  
                }
            },
            {
                test: /\.js$/,
                exclude: /\/node_modules\//,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['env']
                  }
                }
              },
              {
                test: /\.css$/,
                use: [{
                  loader: "style-loader" // creates style nodes from JS strings
                }, {
                  loader: "css-loader" // translates CSS into CommonJS
                }]
            }
            // {
            //     test: /\.scss$/,
            //     use: [{
            //         loader: "style-loader" // creates style nodes from JS strings
            //     }, {
            //         loader: "css-loader" // toader: "css-loader" // translates CSS into CommonJS
            //     }, {
            //         loader: "sass-loader" // compiles Sass to CSS
            //     }]
            // },
        ]
    }
}