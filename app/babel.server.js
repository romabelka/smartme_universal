require('babel/register')({
    stage: 0
});

/**
 * Define isomorphic constants.
 */
global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DISABLE_SSR__ = true;  // <----- DISABLES SERVER SIDE RENDERING FOR ERROR DEBUGGING
global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production';

if (__DEVELOPMENT__) {
    if (!require('piping')({
            hook: true,
            ignore: /(\/\.|~$|\.json|\.scss$)/i
        })) {
        return;
    }
}

require('./src/server');
