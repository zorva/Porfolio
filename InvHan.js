'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.AddProduct = function () {
            var AddForm = document.getElementById('AddForm');
            AddForm.hidden === false ? AddForm.hidden = true : AddForm.hidden = false;
        };

        _this.UpdateProduct = _this.UpdateProduct.bind(_this);
        _this.UpdateProduct2 = _this.UpdateProduct2.bind(_this);
        _this.state = { Total1: '' };

        return _this;
    }

    _createClass(App, [{
        key: 'UpdateProduct',
        value: function UpdateProduct(e) {
            var subP = e.target.value;
            var parent = e.target.parentElement;
            var Nparent = parent.nextElementSibling;
            var subP2 = Nparent.firstElementChild.value;
            var finalP = Number(subP) * Number(subP2);
            this.setState(function (state) {
                return { Total1: finalP };
            });
        }
    }, {
        key: 'UpdateProduct2',
        value: function UpdateProduct2(e) {
            var subP = e.target.value;
            var parent = e.target.parentElement;
            var Nparent = parent.previousElementSibling;
            var subP2 = Nparent.firstElementChild.value;
            var finalP2 = Number(subP) * Number(subP2);
            this.setState(function (state) {
                return { Total1: finalP2 };
            });
        }
    }, {
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
                                React.createElement('input', { type: 'number', onInput: this.UpdateProduct })
                            ),
                            React.createElement(
                                'th',
                                null,
                                '$',
                                React.createElement('input', { type: 'number', onInput: this.UpdateProduct2 })
                            ),
                            React.createElement(
                                'th',
                                { id: 'th1' },
                                '$',
                                this.state.Total1
                            )
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