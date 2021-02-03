var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Form);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Form.__proto__ || Object.getPrototypeOf(Form)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      name: ''
    }, _this.handleSubmit = function (e) {
      e.preventDefault();
      _this.props.addTask(_this.state.name);
      _this.setState(function (state) {
        return { name: '' };
      });
    }, _this.handleChange = function (e) {
      var val = e.target.value;
      _this.setState(function (state) {
        return { name: val };
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Form, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'form',
        { onSubmit: this.handleSubmit },
        React.createElement(
          'h2',
          { className: 'label-wrapper' },
          React.createElement(
            'label',
            { htmlFor: 'new-todo-input', className: 'label__lg' },
            'What needs to be done?'
          )
        ),
        React.createElement('input', {
          type: 'text',
          id: 'new-todo-input',
          className: 'input input__lg',
          name: 'text',
          autoComplete: 'off',
          value: this.state.name,
          onChange: this.handleChange
        }),
        React.createElement(
          'button',
          { type: 'submit', className: 'btn btn__primary btn__lg' },
          'Add'
        )
      );
    }
  }]);

  return Form;
}(React.Component);