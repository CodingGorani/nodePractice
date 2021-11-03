module.exports = function (app, fs) {
  app.get('/', (req, res) => {
    res.render('index', {
      title: 'My Hompage',
      length: 5,
    });
  });

  app.get('/list', (req, res) => {
    fs.readFile(__dirname + '../data/' + 'user.json', 'utf8', (err, data) => {
      console.log(data);
      res.end(data);
    });
  });

  app.get('/getUser/:username', function (req, res) {
    fs.readFile(__dirname + '/../data/user.json', 'utf8', function (err, data) {
      var users = JSON.parse(data);
      res.json(users[req.params.username]);
    });
  });
};
