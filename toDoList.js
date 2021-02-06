var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DATA = [{ id: "todo-0", name: "Eat", completed: true }, { id: "todo-1", name: "Sleep", completed: false }, { id: "todo-2", name: "Repeat", completed: false }];
var FILTER_MAP = {
    All: function All() {
        return true;
    },
    Active: function Active(task) {
        return !task.completed;
    },
    Completed: function Completed(task) {
        return task.completed;
    }
};

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.addTask = function (name) {

            var lastID = _this.state.tasks.length === 0 ? 'todo-0' : _this.state.tasks[_this.state.tasks.length - 1].id;
            var newID = '';
            for (var i = 5; i < lastID.length; i++) {
                newID += lastID[i];
            }
            newID = Number(newID) + 1;
            var newTask = { id: 'todo-' + newID, name: name, completed: false };
            _this.setState({ tasks: [].concat(_toConsumableArray(_this.state.tasks), [newTask]) });
        };

        _this.toggleTaskCompleted = function (id) {
            var updateTasks = _this.state.tasks.map(function (task) {
                if (id === task.id) {
                    return Object.assign({}, task, { completed: !task.completed });
                }
                return task;
            });
            _this.setState({ tasks: updateTasks });
        };

        _this.deleteTask = function (id) {
            var remainingTasks = _this.state.tasks.filter(function (task) {
                return id !== task.id;
            });
            _this.setState({ tasks: remainingTasks });
            _this.forceUpdate();
        };

        _this.editTask = function (id, newName) {
            var editTasks = _this.state.tasks.map(function (task) {
                if (id == task.id) {
                    task = Object.assign({}, task, { name: newName });
                }
                return task;
            });
            _this.setState({ tasks: editTasks });
            _this.forceUpdate();
        };

        _this.state = {
            tasks: _this.props.tasks
        };
        return _this;
    }

    _createClass(App, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var taskList = this.state.tasks.map(function (task) {
                return React.createElement(Todo, {
                    id: task.id,
                    name: task.name,
                    completed: task.completed,
                    key: task.id,
                    toggleTaskCompleted: _this2.toggleTaskCompleted,
                    deleteTask: _this2.deleteTask,
                    editTask: _this2.editTask
                });
            });
            var tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
            var headingText = taskList.length + " " + tasksNoun + " remaining";
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
                    headingText
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