var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "todoapp stack-large" },
                React.createElement(
                    "h1",
                    null,
                    "todo list"
                ),
                React.createElement(
                    "form",
                    null,
                    React.createElement(
                        "h2",
                        { className: "label-wrapper" },
                        React.createElement(
                            "label",
                            { htmlFor: "new-todo-input", className: "label__lg" },
                            "pending tasks"
                        )
                    ),
                    React.createElement("input", {
                        type: "text",
                        id: "new-todo-input",
                        className: "input input__lg",
                        name: "text",
                        autoComplete: "off"
                    }),
                    React.createElement(
                        "button",
                        { type: "submit", className: "btn btn__primary btn__lg" },
                        "Add"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "filters btn-group stack-exception" },
                    React.createElement(
                        "button",
                        { type: "button", className: "btn toggle-btn", "aria-pressed": "false" },
                        React.createElement(
                            "span",
                            { className: "visually-hidden" },
                            "Show"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "all"
                        ),
                        React.createElement(
                            "span",
                            { className: "visually-hidden" },
                            "tasks"
                        )
                    ),
                    React.createElement(
                        "button",
                        { type: "button", className: "btn toggle-btn", "aria-pressed": "false" },
                        React.createElement(
                            "span",
                            { className: "visually-hidden" },
                            "Show"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "active"
                        ),
                        React.createElement(
                            "span",
                            { className: "visually-hidden" },
                            "tasks"
                        )
                    ),
                    React.createElement(
                        "button",
                        { type: "button", className: "btn toggle-btn", "aria-pressed": "false" },
                        React.createElement(
                            "span",
                            { className: "visually-hidden" },
                            "how"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "completed"
                        ),
                        React.createElement(
                            "span",
                            { className: "visually-hidden" },
                            "tasks"
                        )
                    )
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
                    React.createElement(Todo, null),
                    React.createElement(Todo, null),
                    React.createElement(Todo, null)
                )
            );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));