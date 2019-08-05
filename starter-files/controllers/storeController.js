const mongoose = require('mongoose');
const Store = mongoose.model('Store');
// exports.myMiddleWare = (req, res, next) => {
//   req.name = 'Wes',
//   next();
// };

exports.homePage =  (req, res) => {
  res.render('index', {title: "Home Page"});
};

exports.addStore = (req, res) => {
  res.render("store/editStore", {title: "💩 Add Store"});
}

exports.createStore = async (req, res) => {
  const store = new Store(req.body);
  await store.save();
  res.redirect('/');
}