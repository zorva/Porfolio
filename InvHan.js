'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Item(props) {
    var arr = Array.from(props.Storage);
    var arr2 = [];
    for (var i in arr) {
        arr2.push(React.createElement(
            "tr",
            { id: "N" + i },
            React.createElement(
                "th",
                null,
                React.createElement("input", { type: "text", onInput: props.UpdateStorage })
            ),
            React.createElement(
                "th",
                null,
                React.createElement("input", { type: "text", onInput: props.UpdateStorage2 })
            ),
            React.createElement(
                "th",
                null,
                React.createElement("input", { type: "number", onInput: props.UpdateProduct })
            ),
            React.createElement(
                "th",
                null,
                React.createElement("input", { type: "number", onInput: props.UpdateProduct2 })
            ),
            React.createElement(
                "th",
                null,
                React.createElement("input", { type: "number", onInput: props.UpdateProduct3 })
            ),
            React.createElement(
                "th",
                null,
                React.createElement("input", null)
            ),
            React.createElement(
                "th",
                null,
                React.createElement("input", null)
            )
        ));
    }
    return arr2;
}

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.UpdateProduct = _this.UpdateProduct.bind(_this);
        _this.UpdateProduct2 = _this.UpdateProduct2.bind(_this);
        _this.UpdateProduct3 = _this.UpdateProduct3.bind(_this);
        _this.AddProduct = _this.AddProduct.bind(_this);
        _this.state = { Storage: localStorage };
        return _this;
    }

    _createClass(App, [{
        key: "UpdateStorage",
        value: function UpdateStorage(e) {
            var Storage = window.localStorage;
            var Id = e.target.parentElement.parentElement.getAttribute('id');
            var storageName = e.target.value;
            var nextParent = e.target.parentElement.nextElementSibling;
            var storageId = nextParent.firstElementChild.value;
            var storageItems = nextParent.nextElementSibling.firstElementChild.value;
            var storagePrice = nextParent.nextElementSibling.nextElementSibling.firstElementChild.value;
            var storagePrice2 = nextParent.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value;
            var storageString = storageName + " " + storageId + " " + storageItems + " " + storagePrice + " " + storagePrice2;
            Storage.setItem(Id, storageString);
        }
    }, {
        key: "UpdateStorage2",
        value: function UpdateStorage2(e) {
            var Storage = window.localStorage;
            var Id = e.target.parentElement.parentElement.getAttribute('id');
            var storageName = e.target.parentElement.previousElementSibling.firstElementChild.value;
            var nextParent = e.target.parentElement.nextElementSibling;
            var storageId = e.target.value;
            var storageItems = nextParent.firstElementChild.value;
            var storagePrice = nextParent.nextElementSibling.firstElementChild.value;
            var storagePrice2 = nextParent.nextElementSibling.nextElementSibling.firstElementChild.value;
            var storageString = storageName + " " + storageId + " " + storageItems + " " + storagePrice + " " + storagePrice2;
            Storage.setItem(Id, storageString);
        }
    }, {
        key: "UpdateProduct",
        value: function UpdateProduct(e) {
            var Storage = window.localStorage;
            var Id = e.target.parentElement.parentElement.getAttribute('id');
            var subP = e.target.value;
            var parent = e.target.parentElement;
            var Nparent = parent.nextElementSibling;
            var N2parent = Nparent.nextElementSibling;
            var N3parent = N2parent.nextElementSibling;
            var N4parent = N3parent.nextElementSibling;
            var subP3 = N2parent.firstElementChild.value;
            var subP2 = Nparent.firstElementChild.value;
            var storageId = parent.previousElementSibling.firstElementChild.value;
            var storageName = parent.previousElementSibling.previousElementSibling.firstElementChild.value;
            var storageString = storageName + " " + storageId + " " + subP + " " + subP2 + " " + subP3;
            Storage.setItem(Id, storageString);
            var finalP = Number(subP) * Number(subP2);
            var finalP2 = Number(subP) * Number(subP3);
            N3parent.firstElementChild.setAttribute('value', finalP);
            N4parent.firstElementChild.setAttribute('value', finalP2);
        }
    }, {
        key: "UpdateProduct2",
        value: function UpdateProduct2(e) {
            var Storage = window.localStorage;
            var Id = e.target.parentElement.parentElement.getAttribute('id');
            var subP = e.target.value;
            var parent = e.target.parentElement;
            var N2parent = parent.nextElementSibling;
            var N3parent = N2parent.nextElementSibling;
            var Nparent = parent.previousElementSibling;
            var subP2 = Nparent.firstElementChild.value;
            var storageId = Nparent.previousElementSibling.firstElementChild.value;
            var storageName = Nparent.previousElementSibling.previousElementSibling.firstElementChild.value;
            var subP3 = N2parent.firstElementChild.value;
            var storageString = storageName + " " + storageId + " " + subP2 + " " + subP + " " + subP3;
            Storage.setItem(Id, storageString);
            var finalP = Number(subP) * Number(subP2);
            N3parent.firstElementChild.setAttribute('value', finalP);
        }
    }, {
        key: "UpdateProduct3",
        value: function UpdateProduct3(e) {
            var Storage = window.localStorage;
            var Id = e.target.parentElement.parentElement.getAttribute('id');
            var subP = e.target.value;
            var parent = e.target.parentElement;
            var Nparent = parent.previousElementSibling;
            var N2parent = Nparent.previousElementSibling;
            var subP2 = N2parent.firstElementChild.value;
            var subP3 = Nparent.firstElementChild.value;
            var storageId = N2parent.previousElementSibling.firstElementChild.value;
            var storageName = N2parent.previousElementSibling.previousElementSibling.firstElementChild.value;
            var storageString = storageName + " " + storageId + " " + subP2 + " " + subP3 + " " + subP;
            Storage.setItem(Id, storageString);
            var finalP = Number(subP) * Number(subP2);
            var N3parent = parent.nextElementSibling.nextElementSibling;
            N3parent.firstElementChild.setAttribute('value', finalP);
        }
    }, {
        key: "AddProduct",
        value: function AddProduct(e) {
            var table = document.getElementById('mainTable');
            var Item = document.getElementById("InitialRenderingContainer");
            var container = table.lastElementChild;
            var Storage = window.localStorage;
            var startingPoint = void 0;
            var newId = void 0;
            var firstId = void 0;
            if (Item.childElementCount === 0) {
                container.previousElementSibling === Item ? newId = 'N0' : (firstId = container.previousElementSibling.lastElementChild.getAttribute('id'), newId = 'N' + String(Number(firstId[1]) + 1));
            } else {
                startingPoint = container.previousElementSibling;
                firstId = startingPoint.lastElementChild.getAttribute('id');
                newId = 'N' + String(Number(firstId[1]) + 1);
            }
            Storage.setItem(newId, '');
            var UpdateProduct = function UpdateProduct(e) {
                var subP = e.target.value;
                var parent = e.target.parentElement;
                var Nparent = parent.nextElementSibling;
                var N2parent = Nparent.nextElementSibling;
                var N3parent = N2parent.nextElementSibling;
                var N4parent = N3parent.nextElementSibling;
                var subP3 = N2parent.firstElementChild.value;
                var subP2 = Nparent.firstElementChild.value;
                var storageId = parent.previousElementSibling.firstElementChild.value;
                var storageName = parent.previousElementSibling.previousElementSibling.firstElementChild.value;
                var storageString = storageName + " " + storageId + " " + subP + " " + subP2 + " " + subP3;
                Storage.setItem(newId, storageString);
                var finalP = Number(subP) * Number(subP2);
                var finalP2 = Number(subP) * Number(subP3);
                N3parent.firstElementChild.setAttribute('value', finalP);
                N4parent.firstElementChild.setAttribute('value', finalP2);
            };
            var UpdateProduct2 = function UpdateProduct2(e) {
                var subP = e.target.value;
                var parent = e.target.parentElement;
                var N2parent = parent.nextElementSibling;
                var N3parent = N2parent.nextElementSibling;
                var Nparent = parent.previousElementSibling;
                var subP2 = Nparent.firstElementChild.value;
                var storageId = Nparent.previousElementSibling.firstElementChild.value;
                var storageName = Nparent.previousElementSibling.previousElementSibling.firstElementChild.value;
                var subP3 = N2parent.firstElementChild.value;
                var storageString = storageName + " " + storageId + " " + subP2 + " " + subP + " " + subP3;
                Storage.setItem(newId, storageString);
                var finalP = Number(subP) * Number(subP2);
                N3parent.firstElementChild.setAttribute('value', finalP);
            };
            var UpdateProduct3 = function UpdateProduct3(e) {
                var subP = e.target.value;
                var parent = e.target.parentElement;
                var Nparent = parent.previousElementSibling;
                var N2parent = Nparent.previousElementSibling;
                var subP2 = N2parent.firstElementChild.value;
                var subP3 = Nparent.firstElementChild.value;
                var storageId = N2parent.previousElementSibling.firstElementChild.value;
                var storageName = N2parent.previousElementSibling.previousElementSibling.firstElementChild.value;
                var storageString = storageName + " " + storageId + " " + subP2 + " " + subP3 + " " + subP;
                Storage.setItem(newId, storageString);
                var finalP = Number(subP) * Number(subP2);
                var N3parent = parent.nextElementSibling.nextElementSibling;
                N3parent.firstElementChild.setAttribute('value', finalP);
            };
            var UpdateStorage = function UpdateStorage(e) {
                var storageName = e.target.value;
                var nextParent = e.target.parentElement.nextElementSibling;
                var storageId = nextParent.firstElementChild.value;
                var storageItems = nextParent.nextElementSibling.firstElementChild.value;
                var storagePrice = nextParent.nextElementSibling.nextElementSibling.firstElementChild.value;
                var storagePrice2 = nextParent.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value;
                var storageString = storageName + " " + storageId + " " + storageItems + " " + storagePrice + " " + storagePrice2;
                Storage.setItem(newId, storageString);
            };
            var UpdateStorage2 = function UpdateStorage2(e) {
                var storageName = e.target.parentElement.previousElementSibling.firstElementChild.value;
                var nextParent = e.target.parentElement.nextElementSibling;
                var storageId = e.target.value;
                var storageItems = nextParent.firstElementChild.value;
                var storagePrice = nextParent.nextElementSibling.firstElementChild.value;
                var storagePrice2 = nextParent.nextElementSibling.nextElementSibling.firstElementChild.value;
                var storageString = storageName + " " + storageId + " " + storageItems + " " + storagePrice + " " + storagePrice2;
                Storage.setItem(newId, storageString);
            };
            var elm = React.createElement(
                "tr",
                { id: newId },
                React.createElement(
                    "th",
                    null,
                    React.createElement("input", { type: "text", onInput: UpdateStorage })
                ),
                React.createElement(
                    "th",
                    null,
                    React.createElement("input", { type: "text", onInput: UpdateStorage2 })
                ),
                React.createElement(
                    "th",
                    null,
                    React.createElement("input", { type: "number", onInput: UpdateProduct
                    })
                ),
                React.createElement(
                    "th",
                    null,
                    React.createElement("input", { type: "number", onInput: UpdateProduct2 })
                ),
                React.createElement(
                    "th",
                    null,
                    React.createElement("input", { type: "number", onInput: UpdateProduct3 })
                ),
                React.createElement(
                    "th",
                    null,
                    React.createElement("input", null)
                ),
                React.createElement(
                    "th",
                    null,
                    React.createElement("input", null)
                )
            );
            ReactDOM.render(elm, container);
            var NewContainer = document.createElement('tbody');
            table.append(NewContainer);
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            var InitialTable = document.getElementById("InitialRenderingContainer");
            var Storage = window.localStorage;
            if (Array.from(Storage).length === 0) {
                null;
            } else {
                for (var i = 0; i < Storage.length; i++) {
                    var key = Storage.key(i);
                    var RawData = Storage.getItem(key);
                    var parent = document.getElementById(key);
                    var inputs = Array.from(parent.children);
                    var InpEvent = new Event('input', {
                        'view': window,
                        'bubbles': true,
                        'cancelable': false
                    });
                    var finalData = [''];
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = Array.from(RawData)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var e = _step.value;

                            e !== ' ' ? finalData[finalData.length - 1] += e : finalData.push('');
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }

                    for (var j = 0; j < 5; j++) {
                        inputs[j].firstElementChild.value = finalData[j];
                        inputs[j].firstElementChild.dispatchEvent(InpEvent);
                    }
                    console.log(finalData);
                }
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "main",
                null,
                React.createElement(
                    "section",
                    { id: "InfoAndSearch" },
                    React.createElement(
                        "h1",
                        { id: "mainInfo" },
                        "El valor total del inventario es ",
                        React.createElement(
                            "span",
                            { id: "ElementsValue" },
                            "$0"
                        ),
                        " y contiene",
                        React.createElement(
                            "span",
                            { id: "ElementsNumber" },
                            " 0"
                        ),
                        " productos"
                    ),
                    React.createElement(
                        "form",
                        { id: "Searcher" },
                        React.createElement("input", { type: "text", id: "Search" }),
                        React.createElement(
                            "label",
                            { htmlFor: "Search" },
                            "Busca productos"
                        )
                    )
                ),
                React.createElement("br", null),
                React.createElement(
                    "section",
                    { id: "InformationSource" },
                    React.createElement(
                        "table",
                        { id: "mainTable" },
                        React.createElement(
                            "thead",
                            null,
                            React.createElement(
                                "tr",
                                null,
                                React.createElement(
                                    "th",
                                    null,
                                    "Nombre "
                                ),
                                React.createElement(
                                    "th",
                                    null,
                                    "id"
                                ),
                                React.createElement(
                                    "th",
                                    null,
                                    "Cantidad"
                                ),
                                React.createElement(
                                    "th",
                                    null,
                                    "Precio afiliado "
                                ),
                                React.createElement(
                                    "th",
                                    null,
                                    "Precio publico"
                                ),
                                React.createElement(
                                    "th",
                                    null,
                                    "Costo Total"
                                ),
                                React.createElement(
                                    "th",
                                    null,
                                    "Valor Total(publico)"
                                )
                            )
                        ),
                        React.createElement(
                            "tbody",
                            { id: "InitialRenderingContainer" },
                            React.createElement(Item, { Storage: this.state.Storage, UpdateProduct: this.UpdateProduct,
                                UpdateProduct2: this.UpdateProduct2, UpdateProduct3: this.UpdateProduct3,
                                UpdateStorage: this.UpdateStorage, UpdateStorage2: this.UpdateStorage2 })
                        ),
                        React.createElement("tbody", null)
                    ),
                    React.createElement("button", { type: "button", id: "newElement", onClick: this.AddProduct }),
                    React.createElement(
                        "label",
                        { htmlFor: "newElement", id: "LabelButtonAdd" },
                        "Agrega nueva mercancia!"
                    )
                )
            );
        }
    }]);

    return App;
}(React.Component);

;

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));