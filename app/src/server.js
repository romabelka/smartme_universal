import Express from 'express'
import config from 'config'
import httpProxy from 'http-proxy'
import path from 'path'

import Html from './Html.react'
import React from 'react'

import router from 'router'
import Location from 'react-router/lib/Location'
import initStore from 'redux/store'

const proxy = httpProxy.createProxyServer({
    target: config.get('apiURL')
})

const app = new Express();
let webpackStats;

if (!__DEVELOPMENT__) {
    webpackStats = require('../webpack-stats.json')
}

app.use(require('serve-static')(path.join(__dirname, '..', 'static')))

// Proxy to API server
app.use('/api', (req, res) => {
    proxy.web(req, res)
})

app.use((req, res) => {
    if (__DEVELOPMENT__) {
        webpackStats = require('../webpack-stats.json');
        // Do not cache webpack stats: the script file would change since
        // hot module replacement is enabled in the development env
        delete require.cache[require.resolve('../webpack-stats.json')];
    }

    let html = '<!doctype html>\n'

    if (__DISABLE_SSR__) {
        html += React.renderToString(<Html component={<div />} webpackStats={webpackStats}/>)
        return res.send(html)
    } else {
        const location = new Location(req.path, req.query)
        const store = initStore()
        router(store, location).then((component) => {
            html += React.renderToString(<Html component={component} webpackStats={webpackStats} store={store}/>)
            res.send(html)
        })
    }
})

app.listen(config.get('port'), (err) => {
        if (err) {
            console.error(err)
        } else {
            console.log('---', 'started successfully,  port: ', config.get('port'))
        }
    }
);