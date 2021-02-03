var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DATA = [{ id: "todo-0", name: "Eat", completed: true }, { id: "todo-1", name: "Sleep", completed: false }, { id: "todo-2", name: "Repeat", completed: false }];

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.addTask = function (name) {
            var newId = Number(_this.state.tasks[_this.state.tasks.length - 1].id[5]) + 1;
            var newTask = { id: 'todo-' + newId, name: name, completed: false };
            _this.setState(function (state) {
                return { tasks: state.tasks.push(newTask) };
            });
            console.log(_this.state.tasks);
        };

        _this.state = {
            tasks: _this.props.tasks
        };
        return _this;
    }

    _createClass(App, [{
        key: "render",
        value: function render() {
            var taskList = this.props.tasks.map(function (task) {
                return React.createElement(Todo, {
                    id: task.id,
                    name: task.name,
                    completed: task.completed,
                    key: task.id
                });
            });
            return React.createElement(
                "div",
                { className: "todoapp stack-large" },
                React.createElement(Form, { addTask: this.addTask }),
                React.createElement(
                    "div",
                    { className: "filters btn-group stack-exception" },
                    React.createElement(FilterButton, null),
                    React.createElement(FilterButton, null),
                    React.createElement(FilterButton, null)
                ),
                React.createElement(
                    "h2",
                    { id: "list-heading" },
                    "3 tasks remaining"
                ),
                React.createElement(
                    "ul",
                    {
                        role: "list",
                        className: "todo-list stack-large stack-exception",
                        "aria-labelledby": "list-heading"
                    },
                    taskList
                )
            );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, { tasks: DATA }), document.getElementById('root'));