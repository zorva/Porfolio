'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, App);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.AddProduct = function () {
            var AddForm = document.getElementById('AddForm');
            AddForm.hidden === false ? AddForm.hidden = true : AddForm.hidden = false;
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }
    // constructor(props){
    //     super(props);
    //     const first = document.querySelector('#Totals');
    //     const th = first.parentElement;
    //     const th1 = th.previousElementSibling;  
    //     const Inp1 = th1.firstElementChild;
    //     const th2 = th1.previousElementSibling;
    //     // let Inp2 = th2.firstElementChild;
    //     this.state = {Total1: Inp1.hasAttribute('value') }; 

    // }


    _createClass(App, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'main',
                null,
                React.createElement(
                    'section',
                    { id: 'InfoAndSearch' },
                    React.createElement(
                        'h1',
                        { id: 'mainInfo' },
                        'El valor total del inventario es ',
                        React.createElement(
                            'span',
                            { id: 'ElementsValue' },
                            '$0'
                        ),
                        ' y contiene',
                        React.createElement(
                            'span',
                            { id: 'ElementsNumber' },
                            ' 0'
                        ),
                        ' productos'
                    ),
                    React.createElement(
                        'form',
                        { id: 'Searcher' },
                        React.createElement('input', { type: 'text', id: 'Search' }),
                        React.createElement(
                            'label',
                            { 'for': 'Search' },
                            'Busca productos'
                        )
                    )
                ),
                React.createElement('br', null),
                React.createElement(
                    'section',
                    { id: 'InformationSource' },
                    React.createElement(
                        'table',
                        { id: 'mainTable' },
                        React.createElement(
                            'tr',
                            null,
                            React.createElement(
                                'th',
                                null,
                                'Nombre '
                            ),
                            React.createElement(
                                'th',
                                null,
                                ' Cantidad por unidad '
                            ),
                            React.createElement(
                                'th',
                                null,
                                ' Precio por unidad '
                            ),
                            React.createElement(
                                'th',
                                null,
                                ' valor Total '
                            )
                        ),
                        React.createElement(
                            'tr',
                            null,
                            React.createElement(
                                'th',
                                null,
                                'Ejemplo Producto'
                            ),
                            ' ',
                            React.createElement(
                                'th',
                                null,
                                React.createElement('input', { type: 'number' })
                            ),
                            React.createElement(
                                'th',
                                null,
                                '$',
                                React.createElement('input', { type: 'number' })
                            ),
                            React.createElement(
                                'th',
                                null,
                                React.createElement(
                                    'p',
                                    { id: 'Totals' },
                                    '$150'
                                )
                            ),
                            ' '
                        )
                    ),
                    React.createElement('button', { type: 'button', id: 'newElement', onClick: this.AddProduct }),
                    React.createElement(
                        'label',
                        { 'for': 'newElement', id: 'LabelButtonAdd' },
                        'Agrega nueva mercancia!'
                    ),
                    React.createElement(
                        'form',
                        { id: 'AddForm', hidden: true },
                        React.createElement('input', { id: 'name' }),
                        React.createElement(
                            'label',
                            { 'for': 'name', className: 'FormLabels' },
                            'Nombre'
                        ),
                        React.createElement('br', null),
                        React.createElement('input', { id: 'units' }),
                        React.createElement(
                            'label',
                            { 'for': 'units', className: 'FormLabels' },
                            'Cantidad'
                        ),
                        React.createElement('br', null),
                        React.createElement('input', { id: 'value' }),
                        React.createElement(
                            'label',
                            { 'for': 'value', className: 'FormLabels' },
                            'Precio unitario'
                        ),
                        React.createElement('br', null),
                        React.createElement(
                            'button',
                            { type: 'button' },
                            'Crear!'
                        )
                    )
                )
            );
        }
    }]);

    return App;
}(React.Component);

;

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));