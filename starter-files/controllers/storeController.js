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
  const store = await (new Store(req.body)).save();
  req.flash('success', `Sucessfully created ${store.name}`)
  res.redirect(`/store/${store.slug}`);
}

exports.getStores = async (req, res) => {
  // Query the database for a list of all stores
  const stores = await Store.find();
  res.render('store/stores', {title: "Stores", stores});
}

exports.editStore = async (req, res) => {
  // find the store given the id
  const store = await Store.findOne({_id: req.params.id});
  // confirm they are the owner of the store
  // TODO
  // render out the edit form so they can update the store
  res.render('store/editStore', {title: `Edit ${store.name}`, store});
}

exports.updateStore = async (req,res) => {
  // find and update store
  const store = await Store.findOneAndUpdate({_id: req.params.id}, req.body, {
    new: true, // return the new store than the old one
    runValidators: true
  }).exec();
  req.flash('success', `Successfully updated <strong>${store.name}</strong>. <a href='/stores/${store.slug}'>View Store ↪</a>`);
  
  res.redirect(`/stores/${store._id}/edit`);
  // redirect then store and tell them it worked
}