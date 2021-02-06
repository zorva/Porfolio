var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Todo = function (_React$Component) {
  _inherits(Todo, _React$Component);

  function Todo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Todo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Todo.__proto__ || Object.getPrototypeOf(Todo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isEditing: false,
      newName: ''
    }, _this.setEditing = function () {
      _this.setState({ isEditing: !_this.state.isEditing });
    }, _this.handleChange = function (e) {
      _this.setState({ newName: e.target.value });
    }, _this.handleSubmit = function (e) {
      e.preventDefault();
      _this.props.editTask(_this.props.id, _this.state.newName);
      _this.setState({ newName: '' });
      _this.setEditing();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Todo, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var viewTemplate = React.createElement(
        'div',
        { className: 'stack-small' },
        React.createElement(
          'div',
          { className: 'c-cb' },
          React.createElement('input', {
            id: this.props.id,
            type: 'checkbox',
            defaultChecked: this.props.completed,
            onChange: function onChange() {
              return _this2.props.toggleTaskCompleted(_this2.props.id);
            }
          }),
          React.createElement(
            'label',
            { className: 'todo-label', htmlFor: this.props.id },
            this.props.name
          )
        ),
        React.createElement(
          'div',
          { className: 'btn-group' },
          React.createElement(
            'button',
            {
              type: 'button',
              className: 'btn',
              onClick: function onClick() {
                return _this2.setEditing();
              }
            },
            'Edit ',
            React.createElement(
              'span',
              { className: 'visually-hidden' },
              this.props.name
            )
          ),
          React.createElement(
            'button',
            {
              type: 'button',
              className: 'btn btn__danger',
              onClick: function onClick() {
                return _this2.props.deleteTask(_this2.props.id);
              }
            },
            'Delete ',
            React.createElement(
              'span',
              { className: 'visually-hidden' },
              this.props.name
            )
          )
        )
      );
      var editingTemplate = React.createElement(
        'form',
        {
          className: 'stack-small',
          onSubmit: this.handleSubmit
        },
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { className: 'todo-label', htmlFor: this.props.id },
            'New name for ',
            this.props.name
          ),
          React.createElement('input', {
            id: this.props.id,
            className: 'todo-text',
            type: 'text',
            onChange: this.handleChange
          })
        ),
        React.createElement(
          'div',
          { className: 'btn-group' },
          React.createElement(
            'button',
            {
              type: 'button',
              className: 'btn todo-cancel',
              onClick: function onClick() {
                return _this2.setEditing();
              }
            },
            'Cancel',
            React.createElement(
              'span',
              { className: 'visually-hidden' },
              'renaming ',
              this.props.name
            )
          ),
          React.createElement(
            'button',
            {
              type: 'submit',
              className: 'btn btn__primary todo-edit'
            },
            'Save',
            React.createElement(
              'span',
              { className: 'visually-hidden' },
              'new name for ',
              this.props.name
            )
          )
        )
      );
      return React.createElement(
        'li',
        { className: 'todo' },
        this.state.isEditing ? editingTemplate : viewTemplate
      );
    }
  }]);

  return Todo;
}(React.Component);