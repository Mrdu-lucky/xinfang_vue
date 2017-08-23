let shoucang = function (app, read, write) {

  let result = {};//创建result模板


  app.post('/api/add-collect', function (req, res) {
    let str = '';
    req.on('data', function (data) {
      str += data;
    });
    req.on('end', function () {
      read('./data/user.json', function (data) {

        let {id, collection} = JSON.parse(str);

        let testID = data.find(item => item.id === id);

        data = data.filter(item => item.id !== id);
        if (!testID.collection) {
          testID.collection = [];
        }

        testID.collection.push(collection);
        data.push(testID);//将新用户添加放回去
        write('./data/user.json', data, function () {
          result = {
            num: 1, //未添加过
            msg: '您已收藏成功！',
            userData: testID
          };
          res.end(JSON.stringify(result));
        })
      })
    })
  });

  app.post('/api/del-collect', function (req, res) {
    let str = '';
    req.on('data', function (data) {
      str += data;
    });
    req.on('end', function () {
      read('./data/user.json', function (data) {
        let {id, collection} = JSON.parse(str);
        let testID = data.find(item => item.id === id);
        data = data.filter(item => item.id !== id);
        let filcollection = testID.collection.filter(item => (item.id !== collection.id));
        testID.collection = filcollection;
        data.push(testID);//将新用户添加放回去
        write('./data/user.json', data, function () {
          result = {
            num: 0, //未添加过
            msg: '您已取消收藏！',
            userData: testID
          };
          res.end(JSON.stringify(result));
        })
      })
    })
  })


}
module.exports = shoucang;
