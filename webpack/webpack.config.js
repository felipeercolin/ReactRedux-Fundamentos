const modoDev = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyjJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    mode: modoDev ? 'development': 'production',
    entry: './src/Principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    devServer:{
        contentBase: __dirname + './public',
        port:9000
    },
    optimization:{
        minimizer:[
            new UglifyjJsPlugin({
                cache:true,
                paralle: true,
            }),
            new OptimizeCssAssetsPlugin({})
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'estilo.css'
        })
    ],
    module:{
        rules:[{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                //'style-loader',//Add CSS a DOM injetando a tag <style>
                'css-loader', //interpreta @import, url()...
                'sass-loader',
            ]
        },{
            test: /\.(png|svg|jpg|git)$/,
            use:['file-loader']
        }]
    },
}