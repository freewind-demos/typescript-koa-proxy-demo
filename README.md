TypeScript Koa Proxy Demo
=========================

使用`koa-proxies`配置proxy server。

它内部使用的是node的`http-proxy`，所以options也是那边的。

注意：
1. 对于https协议，需要设置`secure`为`false`，否则会有证书问题无法正确得到回复
2. log的url有问题，`GET /me proxy to -> https://api.github.com/freewind`，实际上应该是`https://api.github.com/users/freewind`

```
npm install
npm run demo
```

Then visit <http://localhost:3000/me>.
