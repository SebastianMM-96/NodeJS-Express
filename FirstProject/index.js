/** Import express */
const express = require('express');
/** Import the path module */
const path = require('path')
const hoganMiddleware = require('hogan-middleware');

const app = express();
/** Use the views templates */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mustache');
app.engine('mustache', hoganMiddleware.__express);

app.use(express.static(path.join(__dirname, 'public')));

/** Use the routers model */
const indexRouter = require('./routes/index');

/** Use the routers */
app.use('/', indexRouter);

app.listen(3000);