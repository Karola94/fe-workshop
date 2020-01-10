const webpack_node_externals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    externals: [webpack_node_externals()],
    mode: 'development'
};