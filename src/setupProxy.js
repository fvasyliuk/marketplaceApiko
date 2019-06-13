const createProxy = require('http-proxy-middleware');

const proxy = createProxy({
    target: 'https://apiko-marketplace-api-2019.herokuapp.com/',
    pathRewrite: {
        '^intense-earth-67837.herokuapp.com/api': '',
    },
    changeOrigin: true,
});

const wsProxy = createProxy({
    target: 'https://apiko-marketplace-api-2019.herokuapp.com/',
    '^/api': '',
    changeOrigin: true,
    ws: true,
});

module.exports = (app) => {
    app.use('/api', proxy);
    app.use('/socket.io', wsProxy);
}
