const {resolve} = require('path');

module.exports = {

    entry: './src/js/app.js',
    output: {
        path: resolve(__dirname, 'dist/'),
        filename: 'bundle.js'
    }

};