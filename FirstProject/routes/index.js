/**
 * Routes file
 */
const express = require('express');
const router = express.Router();

/** Set all the request */
router.get('/', (req, res, next)=>{
    res.send("Hello from routes");
});

router.get('/home', (req, res, next)=>{
    res.render('home', null);
});


module.exports = router;