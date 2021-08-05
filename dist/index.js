"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _productos = _interopRequireDefault(require("./routes/productos"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const port = 8080;
const app = (0, _express.default)();
const server = app.listen(port, () => {
  console.log(`Server running in port:  ${port}`);
});
server.on('error', err => {
  console.error(`There was an error: ${err}`);
});
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: true
}));
app.set('json spaces', 2);

const publicPath = _path.default.resolve(__dirname, '../public');

app.use(_express.default.static(publicPath));
app.use('/api', _productos.default);