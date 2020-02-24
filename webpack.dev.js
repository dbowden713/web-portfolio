const path = require('path');
const webpackCommon = require('./webpack.common');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =  merge(webpackCommon, {
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        overlay: true,
        host: "0.0.0.0",
        port: 8080,
        openPage: "http://localhost:8080"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
            favicon: "./src/assets/favicon.png"
        })
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
});