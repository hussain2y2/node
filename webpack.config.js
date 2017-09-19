var path = require('path');
module.exports = {
    entry: "./app/assets/js/App.js",
    output: {
        path: path.resolve(__dirname, './app/tmp/js'),
        filename: "App.js"
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                },
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
};