// Только для локальной разработки: пробрасывает запросы /api/* в PHP built-in server (php -S localhost:8000 -t api)
const http = require('http')

module.exports = function (req, res) {
  const proxyReq = http.request(
    {
      hostname: 'localhost',
      port: 8000,
      path: req.url,
      method: req.method,
      headers: req.headers,
    },
    (proxyRes) => {
      res.writeHead(proxyRes.statusCode, proxyRes.headers)
      proxyRes.pipe(res)
    }
  )
  proxyReq.on('error', (err) => {
    res.statusCode = 502
    res.end('Proxy error: ' + err.message)
  })
  req.pipe(proxyReq)
}
