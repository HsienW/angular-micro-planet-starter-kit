const PROXY_CONFIG = {};

PROXY_CONFIG['/static/app1'] = {
    target: 'http://localhost:3001',
    secure: false,
    changeOrigin: true
};

module.exports = PROXY_CONFIG;
