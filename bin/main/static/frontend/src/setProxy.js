const { createProxyMiddleware } = NodeRequire('http-proxy-middleware');

module.exports = function() {
  app.use(
    createProxyMiddleware( '/worker', '/login', {
      target: 'http://localhost:8080',	// 서버 URL or localhost:설정한포트번호
      changeOrigin: true,
    })
  );

};
