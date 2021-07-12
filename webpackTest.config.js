const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var HappyPack = require('happypack');
const os = require('os');
var happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
const CopywebpackPlugin = require('copy-webpack-plugin');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const EncodingPlugin = require('webpack-encoding-plugin');

module.exports = {
    context: __dirname,
    entry: {
        app: './src/Test/DownLoad.js'
    },
    devtool: 'source-map',
    //mode: 'production',
    // 开发环境设置本地服务器，实现热更新
    devServer: {
        contentBase: path.resolve(__dirname, 'dist/Test'),
        // 提供给外部访问
        host: '0.0.0.0',
        port: 8388,
        // 允许开发服务器访问本地服务器的包JSON文件，防止跨域
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        // 设置热替换
        hot: true,
        // 设置页面引入
        inline: true
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist/Test'),
        //需要编译Cesium中的多行字符串 
        sourcePrefix: ''
    },
    amd: {
        //允许Cesium兼容 webpack的require方式 
        toUrlUndefined: true
    },
    node: {
        // 解决fs模块的问题（Resolve node module use of fs）
        fs: 'empty'
    },
    resolve: {
        alias: {
            '@': path.resolve('src'),
            'GeoJson2Shp': path.resolve('src/GeoJson2Shp'), //自己新建 要从src开始写文件路径


        }
    },
    module: {
        rules: [{ test: /\.js$/, exclude: /node_modules/ },
        //    {
        //    test: /\.css$/,
        //    use: ['style-loader', 'css-loader']
        //}
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        }

            , {
            test: /\.(png|gif|jpg|jpeg|svg|xml|json)$/,
            use: ['url-loader']
        }
        ]
    },
    // 开发服务器配置
    devServer: {
        contentBase: path.join(__dirname, "dist/Test")
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/Test/DownLoad.html'
        }),
        new CopywebpackPlugin([{ from: "src/Test/extend", to: 'extend' }]),
    ]
};
