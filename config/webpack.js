module.exports = {
    watch: true,
    entry: './client.js',
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        filename: './build/client.js'
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: 'jsx-loader' }
        ]
    }
};
