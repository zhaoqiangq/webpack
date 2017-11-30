const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports={
    entry:'./src/app.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: "js/min.js",
        publicPath: "./"
    },
    plugins: [new htmlWebpackPlugin({
        filename:'index.html',
        template:'src/index.html'
    }),
        new cleanWebpackPlugin('dist')
    ],
    devServer: {
        open:true,
        port:9000,
        publicPath: "/"
    },
    module: {
        rules: [
            {
            test: /\.js$/,
            use: [{
                loader: 'babel-loader',
                options: {presets: ['react','env']}
                }],
                exclude:[path.resolve(__dirname,'node_modules')]
            },
            {
                test:/\.css$/,
                use:['style-loader',
                    {
                        loader: 'css-loader',
                        options:{
                            module:true,
                            localIdentName:'[name]-[local]_[hash:base64:6]'
                        }
                    }
                ],
                exclude: [
                    path.resolve(__dirname,'node_module'),
                    path.resolve(__dirname,'src/style')
                ]
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader'],
                include:[
                    path.resolve(__dirname,'node_module'),
                    path.resolve(__dirname,'src/style')
                ]
            },
            {
                test:/\.scss$/,
                use:['style-loader',
                    {
                        loader: 'css-loader',
                        options:{
                            module:true,
                            localIdentName:'[name]-[local]_[hash:base64:6]'
                        }
                    },
                    'sass-loader'
                ],
                exclude: [
                    path.resolve(__dirname,'node_module'),
                    path.resolve(__dirname,'src/style')
                ]
            },
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader'],
                include:[
                    path.resolve(__dirname,'node_module'),
                    path.resolve(__dirname,'src/style')
                ]
            },
            {
                test:/\.(jpg|png|gif|jpeg)$/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:30000,
                        name:'images/[name]_[hash:6].[ext]'
                    }
                }]
            },
            {
                test:/\.(ttf|eot|woff|woff2|svg)$/,
                use:[{
                    loader: "file-loader",
                    options:{
                        name:'fonts/[name]_[hash:6].[ext]'
                    }
                }]
            }
        ]
    }
}

