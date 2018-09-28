const Koa = require('koa')
const app = new Koa()

app.use(async(ctx, next) => {
  await next()
  ctx.body = '1'
})

app.listen(3000)
