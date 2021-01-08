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
            var table = document.getElementById('mainTable');
            var tr = document.createElement('tr');
            var trArray = [];
            for (var i = 0; i < 7; i++) {
                trArray.push(document.createElement('th'));
            }
            for (var _i in trArray) {
                trArray[_i].append(document.createElement('input'));
                tr.append(trArray[_i]);
            }
            tr.setAttribute('id', "0");
            for (var _i2 = 0; _i2 < 2; _i2++) {
                trArray[_i2].setAttribute('type', 'text');
            }
            for (var _i3 = 2; _i3 < trArray.length - 2; _i3++) {
                trArray[_i3].setAttribute('type', 'number');
            }
            table.append(tr);
            console.log(tr);
        };

        _this.UpdateProduct = _this.UpdateProduct.bind(_this);
        _this.UpdateProduct2 = _this.UpdateProduct2.bind(_this);
        _this.UpdateProduct3 = _this.UpdateProduct3.bind(_this);
        _this.state = { Total1: '', Total2: '' };

        return _this;
    }

    _createClass(App, [{
        key: 'UpdateProduct',
        value: function UpdateProduct(e) {
            var subP = e.target.value;
            var parent = e.target.parentElement;
            var Nparent = parent.nextElementSibling;
            var N2parent = Nparent.nextElementSibling;
            var subP3 = N2parent.firstElementChild.value;
            var subP2 = Nparent.firstElementChild.value;
            var finalP = Number(subP) * Number(subP2);
            var finalP2 = Number(subP) * Number(subP3);
            this.setState(function (state) {
                return { Total1: finalP };
            });
            this.setState(function (state) {
                return { Total2: finalP2 };
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
        key: 'UpdateProduct3',
        value: function UpdateProduct3(e) {
            var subP = e.target.value;
            var parent = e.target.parentElement;
            var Nparent = parent.previousElementSibling;
            var N2parent = Nparent.previousElementSibling;
            var subP2 = N2parent.firstElementChild.value;
            var finalP = Number(subP) * Number(subP2);
            this.setState(function (state) {
                return { Total2: finalP };
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
                                'id'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'Cantidad por unidad '
                            ),
                            React.createElement(
                                'th',
                                null,
                                'Precio afiliado '
                            ),
                            React.createElement(
                                'th',
                                null,
                                'Precio publico'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'Costo Total'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'Valor Total(publico)'
                            )
                        ),
                        React.createElement(
                            'tr',
                            { id: '1' },
                            React.createElement(
                                'th',
                                null,
                                React.createElement('input', { type: 'text' })
                            ),
                            React.createElement(
                                'th',
                                null,
                                React.createElement('input', { type: 'text' })
                            ),
                            React.createElement(
                                'th',
                                null,
                                React.createElement('input', { type: 'number', onInput: this.UpdateProduct })
                            ),
                            React.createElement(
                                'th',
                                null,
                                React.createElement('input', { type: 'number', onInput: this.UpdateProduct2 })
                            ),
                            React.createElement(
                                'th',
                                null,
                                React.createElement('input', { type: 'number', onInput: this.UpdateProduct3 })
                            ),
                            React.createElement(
                                'th',
                                null,
                                '$',
                                this.state.Total1
                            ),
                            React.createElement(
                                'th',
                                null,
                                '$',
                                this.state.Total2
                            )
                        )
                    ),
                    React.createElement('button', { type: 'button', id: 'newElement', onClick: this.AddProduct }),
                    React.createElement(
                        'label',
                        { 'for': 'newElement', id: 'LabelButtonAdd' },
                        'Agrega nueva mercancia!'
                    )
                )
            );
        }
    }]);

    return App;
}(React.Component);

;

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));