let path = require("path");

module.exports = {
    mode: 'production',
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "assets"),
        filename: "bundle.js",
        publicPath: "/lab7_zd2/",
        library: 'webpackGhPages'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    devtool: "source-map"
};