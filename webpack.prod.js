const path = require("path")
const TerserPlugin = require("terser-webpack-plugin")

const config = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
        filename: "[name].js",
        clean: true
    },
    mode: "production",
    target: "node",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    optimization:{
        minimize: true,
        minimizer: [new TerserPlugin({
            terserOptions: {
                compress: {
                    drop_console: true
                }
            }
        })]
    }
}

module.exports = config;