module.exports = function (app, fs) {
  app.get('/', (req, res) => {
    res.render('index', {
      title: 'My Hompage',
      length: 5,
    });
  });
};
