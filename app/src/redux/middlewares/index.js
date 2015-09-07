let envMiddlewares
if (__SERVER__) {
    envMiddlewares = require('./server')
} else {
    envMiddlewares = require('./client')
}

import promise from './promise'

export default (envMiddlewares).concat([promise])
