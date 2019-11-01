import * as Koa from 'koa';

const proxy = require('koa-proxies');

const app = new Koa();

app.use(proxy('/me', {
  target: 'https://api.github.com/users',
  changeOrigin: true,
  // agent: new httpsProxyAgent('http://1.2.3.4:88'), // if you need or just delete this line
  secure: false,
  rewrite: (path: string) => {
    console.log("### path", path);
    return path.replace(/^\/me$/, '/freewind')
  },
  logs: true
}))

app.listen(3000, () => {
  console.log('http://localhost:3000/me');
});

