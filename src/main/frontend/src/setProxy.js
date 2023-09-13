// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function(app) {
//   app.use(
//     '/login', '/worker/*', '/index',
//     createProxyMiddleware({
//       target: 'http://localhost:8080',	// 서버 URL or localhost:설정한포트번호
//       changeOrigin: true,
//     })
//   );
//   // app.use(
     
//   //   createProxyMiddleware( '/worker/*', {
//   //     target: 'http://localhost:8080',	// 서버 URL or localhost:설정한포트번호
//   //     changeOrigin: true,
//   //   }),
//   // );

//   // app.use(
     
//   //   createProxyMiddleware( '/',  {
//   //     target: 'http://localhost:8080',	
//   //     changeOrigin: true,
//   //   }),
//   // );

// };