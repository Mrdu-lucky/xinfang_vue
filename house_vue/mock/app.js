let express = require('express')

/*读写*/
let {read,write} = require('./read-and-write')

/*routers*/
let user = require('./routers/user')
let shoucang = require('./routers/shoucang')

/*history模式配置*/
let his = require('./history-api')

let app = express();

const staticFileMiddleware = express.static('dist');

app.use(staticFileMiddleware)
app.use(his);
app.use(staticFileMiddleware)

/*用户信息*/
user(app,read,write)
shoucang(app,read,write)






let server = app.listen(3000, function () {
  let host = server.address().address
  let port = server.address().port
  console.log("访问地址为 http://127.0.0.1:" + port, host, port)
})


