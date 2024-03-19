const path = require("path")

const config = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dev-build"),
        publicPath: "/",
        filename: "[name].js",
        clean: true
    },
    mode: "development",
    target: "node",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
}

module.exports = config;