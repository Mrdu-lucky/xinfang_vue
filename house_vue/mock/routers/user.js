let user = function (app, read, write) {

  let result = {};//创建result模板

  app.post('/api/login', (req, res) => {
    let str = '';
    req.on('data', function (data) {
      str += data;
    });
    req.on('end', function () {
      let newUser = JSON.parse(str);
      read('./data/user.json', function (data) {
        let {id, passWord} = newUser;
        let testId = data.find(item => item.id === id); //返回一个匹配的对象
        if (testId) {
          if (passWord === testId.passWord) {
            result = {
              code: 1, //成功
              msg: '登录成功',
              userData: testId
            };
            res.end(JSON.stringify(result));
          } else {
            result = {
              code: 0, //失败
              msg: '密码错误',
              userData: null
            };
            res.end(JSON.stringify(result));
          }
        } else {
          result = {
            code: 0, //失败
            msg: '账号错误',
            userData: null
          };
          res.end(JSON.stringify(result));
        }
      });
    })
  });


  app.post('/api/sign', (req, res) => {
    let str = '';
    req.on('data', function (data) {
      str += data;
    });
    req.on('end', function () {
      let newUser = JSON.parse(str);
      read('./data/user.json', function (data) {
        let {id, userName, newPas, newNam, userImg} = newUser;
        let testCreateID = data.some(item => item.id === id);
        if (!testCreateID) {
          data.push(newUser);//将新用户添加放回去
          write('./data/user.json', data, function () {
            result = {
              code: 1, //成功
              msg: '用户创建成功',
              userData: null
            };
            res.end(JSON.stringify(result));
          })
        } else {
          result = {
            code: 0, //失败
            msg: '手机号已被占用',
            userData: null
          };
          res.end(JSON.stringify(result));
        }
      });
    });
  });

  app.post('/api/checkNa', (req, res) => {
    let str = '';
    req.on('data', function (data) {
      str += data;
    });
    req.on('end', function () {
      let newUser = JSON.parse(str);
      read('./data/user.json', function (data) { //读取所有de获取最后一项的id 累加
        let {id, userName, newPas, newNam, userImg} = newUser;
        let testCreateName = data.some(item => item.userName === userName);
        if (testCreateName) {
          result = {
            code: 0,
            msg: '用户名被占用',
            userData: null
          };
          res.end(JSON.stringify(result));
        } else {
          result = {
            code: 1,
          };
          res.end(JSON.stringify(result));
        }
      });
    });
  });

  app.post('/api/profile/updataPas', (req, res) => {
    let str = '';
    req.on('data', function (data) {
      str += data;
    });
    req.on('end', function () {
      let newUser = JSON.parse(str);
      read('./data/user.json', function (data) { //读取所有de获取最后一项的id 累加
        let {id, userName, newPas, newNam, userImg} = newUser;
        let updataID = data.find(item => item.id === id);
        data = data.filter(item => item.id !== id);
        updataID.passWord = newPas;
        data.push(updataID);//将新用户添加放回去
        write('./data/user.json', data, function () {
          result = {
            code: 1, //成功
            msg: '密码修改成功',
            userData: null
          };
          res.end(JSON.stringify(result));
        })
      });
    });
  });

  app.post('/api/profile/updataNam', (req, res) => {
    let str = '';
    req.on('data', function (data) {
      str += data;
    });
    req.on('end', function () {
      let newUser = JSON.parse(str);
      read('./data/user.json', function (data) { //读取所有de获取最后一项的id 累加
        let {id, newNam, city, sex} = newUser;
        let updataID = data.find(item => item.id === id);
        data = data.filter(item => item.id !== id);

        if (newNam != '') {
          updataID.userName = newNam;
        }
        if (city != ''){
          updataID.city = city;
        }
        if (sex != ''){
          updataID.sex = sex;
        }
        data.push(updataID);//将新用户添加放回去
        write('./data/user.json', data, function () {
          result = {
            code: 1, //成功
            msg: '用户信息修改成功',
            userData: updataID
          };
          res.end(JSON.stringify(result));
        })

      });
    });
  });


  app.post('/api/profile/updataImg', (req, res) => {
    let str = '';
    req.on('data', function (data) {
      str += data;
    });
    req.on('end', function () {
      let newUser = JSON.parse(str);
      read('./data/user.json', function (data) { //读取所有de获取最后一项的id 累加
        let {id, userName, newPas, newNam, userImg} = newUser;
        let updataID = data.find(item => item.id === id);
        data = data.filter(item => item.id !== id);
        updataID.headImg = userImg;
        data.push(updataID);//将新用户添加放回去
        write('./data/user.json', data, function () {
          result = {
            code: 1, //成功
            msg: '头像修改成功',
            userData: updataID
          };
          res.end(JSON.stringify(result));
        })
      });
    });
  });

}

module.exports = user;
