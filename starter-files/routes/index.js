const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController.js');
const { catchErrors } = require('../handlers/errorHandlers');  // see handlers/errorHandlers.js


// Do work here

// you can do this
// router.get('/', storeController.myMiddleWare, storeController.homePage);

router.get('/', storeController.homePage);
router.get('/add', storeController.addStore);
router.post('/add', catchErrors(storeController.createStore)); // see handlers/errorHandlers.js

module.exports = router;
