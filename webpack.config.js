const path = require('path');

module.exports = {
    entry: './public/script.js',
    output:{
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'public')
    },
    mode:'development'
}