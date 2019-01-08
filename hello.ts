import * as Koa from 'koa';

const app = new Koa();

async function delay(fn: () => void, timeout: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            fn();
            resolve()
        }, timeout)
    })
}

app.use(async ctx => {
    const requestTime = Date.now();
    await delay(() => {
        const responseTime = Date.now();
        ctx.body = `Hello, Koa (${requestTime} -> ${responseTime})`;
    }, 1000);
});

app.listen(3000, () => {
    console.log('http://localhost:3000');
});

