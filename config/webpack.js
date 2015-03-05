module.exports = {
    entry: "./client.js",
    output: {
        filename: "./build/client.js"
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: "jsx-loader" }
        ]
    }
};
