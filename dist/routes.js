'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _usersController = require('./controller/usersController');

var _usersController2 = _interopRequireDefault(_usersController);

var _authController = require('./controller/authController');

var _authController2 = _interopRequireDefault(_authController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = function routes(route) {
    route.get('/', function (req, res) {
        res.send('Api server in running (' + new Date() + ')');
    });

    // route.route('/login')
    //     .post(authController.login);

    // route.route('/register')
    //     .post(authController.register);

    // route.route('/users')
    //     .get(usersController.getAll)
    //     .post(usersController.create);

    // route.route('/users/:id')
    //     .get(usersController.getOne)
    //     .put(usersController.update)
    //     .delete(usersController.delete)
};

exports.default = routes;
//# sourceMappingURL=routes.js.map