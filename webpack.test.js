const webpack_node_externals = require('webpack-node-externals');

module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    target: 'node',
    externals: [webpack_node_externals()],
    mode: 'development'
};