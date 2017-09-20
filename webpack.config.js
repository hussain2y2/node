var path = require('path');
module.exports = {
    entry: {
        App: "./app/assets/js/App.js",
        Vendor: "./app/assets/js/Vendor.js"
    },
    output: {
        path: path.resolve(__dirname, './app/tmp/js'),
        filename: "[name].js" // To output in different files like input as (App.js & Vendor.js)
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