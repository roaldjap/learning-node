const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController.js');
const { catchErrors } = require('../handlers/errorHandlers');  // see handlers/errorHandlers.js


// Do work here

// you can do this
// router.get('/', storeController.myMiddleWare, storeController.homePage);
router.get('/', catchErrors(storeController.getStores));
router.get('/stores', catchErrors(storeController.getStores));
router.get('/add', storeController.addStore);
router.post('/add', catchErrors(storeController.createStore)); // see handlers/errorHandlers.js
router.post('/add/:id', catchErrors(storeController.updateStore));
router.get('/stores/:id/edit', catchErrors(storeController.editStore));
module.exports = router;
