const path = require('path');
const express = require('express')
const debug = require('debug')('physicsengine:server')

const app = express()

app.use('/public', express.static(path.join(__dirname , 'public')))

app.listen(
    process.env.PORT || 80,
    "0.0.0.0", 
    () => {
        debug('Server Started.')
    }
)