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
                React.createElement("input", { type: "number" })
            ),
            React.createElement(
                "th",
                null,
                React.createElement("input", { type: "number" })
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
        _this.addCost = _this.addCost.bind(_this);
        _this.addVal = _this.addVal.bind(_this);
        _this.SubtractCost = _this.SubtractCost.bind(_this);
        _this.SubtractVal = _this.SubtractVal.bind(_this);
        _this.state = { Storage: localStorage, TotalVal: 0, TotalCost: 0 };
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
            var storageString = "{" + storageName + "} {" + storageId + "} {" + storageItems + "} {" + storagePrice + "} {" + storagePrice2 + "}";
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
            var storageString = "{" + storageName + "} {" + storageId + "} {" + storageItems + "} {" + storagePrice + "} {" + storagePrice2 + "}";
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
            var storageString = "{" + storageName + "} {" + storageId + "} {" + subP + "} {" + subP2 + "} {" + subP3 + "}";
            Storage.setItem(Id, storageString);
            var finalP = Number(subP) * Number(subP2);
            var finalP2 = Number(subP) * Number(subP3);
            var Subtract = Number(N3parent.firstElementChild.value);
            var Subtract2 = Number(N4parent.firstElementChild.value);
            this.setState(function (state) {
                return { TotalCost: state.TotalCost - Subtract };
            });
            this.setState(function (state) {
                return { TotalVal: state.TotalVal - Subtract2 };
            });
            N3parent.firstElementChild.setAttribute('value', finalP);
            N4parent.firstElementChild.setAttribute('value', finalP2);
            this.setState(function (state) {
                return { TotalCost: state.TotalCost + finalP, TotalVal: state.TotalVal + finalP2 };
            });
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
            var storageString = "{" + storageName + "} {" + storageId + "} {" + subP2 + "} {" + subP + "} {" + subP3 + "}";
            Storage.setItem(Id, storageString);
            var finalP = Number(subP) * Number(subP2);
            var Subtract = Number(N3parent.firstElementChild.value);
            this.setState(function (state) {
                return { TotalCost: state.TotalCost - Subtract };
            });
            N3parent.firstElementChild.setAttribute('value', finalP);
            this.setState(function (state) {
                return { TotalCost: state.TotalCost + finalP };
            });
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
            var storageString = "{" + storageName + "} {" + storageId + "} {" + subP2 + "} {" + subP3 + "} {" + subP + "}";
            Storage.setItem(Id, storageString);
            var finalP = Number(subP) * Number(subP2);
            var N3parent = parent.nextElementSibling.nextElementSibling;
            var Subtract = Number(N3parent.firstElementChild.value);
            this.setState(function (state) {
                return { TotalVal: state.TotalVal - Subtract };
            });
            N3parent.firstElementChild.setAttribute('value', finalP);
            this.setState(function (state) {
                return { TotalVal: state.TotalVal + finalP };
            });
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
                if (container.previousElementSibling === Item) {
                    newId = 'N0';
                } else {
                    firstId = container.previousElementSibling.lastElementChild.getAttribute('id');
                    var NfirstId = '';
                    for (var i = 1; i < firstId.length; i++) {
                        NfirstId += firstId[i];
                    }
                    console.log(NfirstId);
                    newId = 'N' + String(Number(NfirstId) + 1);
                }
            } else {
                startingPoint = container.previousElementSibling;
                firstId = startingPoint.lastElementChild.getAttribute('id');
                var _NfirstId = '';
                for (var _i = 1; _i < firstId.length; _i++) {
                    _NfirstId += firstId[_i];
                }
                newId = 'N' + String(Number(_NfirstId) + 1);
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
                var storageString = "{" + storageName + "} {" + storageId + "} {" + subP + "} {" + subP2 + "} {" + subP3 + "}";
                Storage.setItem(newId, storageString);
                var Subtractor = document.getElementById('Subtractor');
                var Subtractor2 = document.getElementById('Subtractor2');
                var Adder = document.getElementById('Adder');
                var Adder2 = document.getElementById('Adder2');
                var input = new Event('input', {
                    'view': window,
                    'bubbles': true,
                    'cancelable': false
                });
                var finalP = Number(subP) * Number(subP2);
                var finalP2 = Number(subP) * Number(subP3);
                var SubtractVal = Number(N3parent.firstElementChild.value);
                var SubtractVal2 = Number(N4parent.firstElementChild.value);
                Subtractor.value = SubtractVal;
                Subtractor2.value = SubtractVal2;
                Subtractor.dispatchEvent(input);
                Subtractor2.dispatchEvent(input);
                N3parent.firstElementChild.setAttribute('value', finalP);
                N4parent.firstElementChild.setAttribute('value', finalP2);
                Adder.value = finalP;
                Adder2.value = finalP2;
                Adder.dispatchEvent(input);
                Adder2.dispatchEvent(input);
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
                var storageString = "{" + storageName + "} {" + storageId + "} {" + subP2 + "} {" + subP + "} {" + subP3 + "}";
                Storage.setItem(newId, storageString);
                var input = new Event('input', {
                    'view': window,
                    'bubbles': true,
                    'cancelable': false
                });
                var Subtractor = document.getElementById('Subtractor');
                var Adder = document.getElementById('Adder');
                var finalP = Number(subP) * Number(subP2);
                var Subtract = Number(N3parent.firstElementChild.value);
                Subtractor.value = Subtract;
                Subtractor.dispatchEvent(input);
                N3parent.firstElementChild.setAttribute('value', finalP);
                Adder.value = finalP;
                Adder.dispatchEvent(input);
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
                var storageString = "{" + storageName + "} {" + storageId + "} {" + subP2 + "} {" + subP3 + "} {" + subP + "}";
                Storage.setItem(newId, storageString);
                var input = new Event('input', {
                    'view': window,
                    'bubbles': true,
                    'cancelable': false
                });
                var Subtract = Number(N3parent.firstElementChild.value);
                var Subtractor2 = document.getElementById('Subtractor2');
                var Adder2 = document.getElementById('Adder2');
                var finalP = Number(subP) * Number(subP2);
                var N3parent = parent.nextElementSibling.nextElementSibling;
                Subtractor2.value = Subtract;
                Subtractor2.dispatchEvent(input);
                N3parent.firstElementChild.setAttribute('value', finalP);
                Adder2.value = finalP;
                Adder2.dispatchEvent(input);
            };
            var UpdateStorage = function UpdateStorage(e) {
                var storageName = e.target.value;
                var nextParent = e.target.parentElement.nextElementSibling;
                var storageId = nextParent.firstElementChild.value;
                var storageItems = nextParent.nextElementSibling.firstElementChild.value;
                var storagePrice = nextParent.nextElementSibling.nextElementSibling.firstElementChild.value;
                var storagePrice2 = nextParent.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value;
                var storageString = "{" + storageName + "} {" + storageId + "} {" + storageItems + "} {" + storagePrice + "} {" + storagePrice2 + "}";
                Storage.setItem(newId, storageString);
            };
            var UpdateStorage2 = function UpdateStorage2(e) {
                var storageName = e.target.parentElement.previousElementSibling.firstElementChild.value;
                var nextParent = e.target.parentElement.nextElementSibling;
                var storageId = e.target.value;
                var storageItems = nextParent.firstElementChild.value;
                var storagePrice = nextParent.nextElementSibling.firstElementChild.value;
                var storagePrice2 = nextParent.nextElementSibling.nextElementSibling.firstElementChild.value;
                var storageString = "{" + storageName + "} {" + storageId + "} {" + storageItems + "} {" + storagePrice + "} {" + storagePrice2 + "}";
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
        key: "addCost",
        value: function addCost(e) {
            var data = Number(e.target.value);
            this.setState(function (state) {
                return { TotalCost: state.TotalCost + data };
            });
        }
    }, {
        key: "addVal",
        value: function addVal(e) {
            var data = Number(e.target.value);
            this.setState(function (state) {
                return { TotalVal: state.TotalVal + data };
            });
        }
    }, {
        key: "SubtractCost",
        value: function SubtractCost(e) {
            var data = Number(e.target.value);
            this.setState(function (state) {
                return { TotalCost: state.TotalCost - data };
            });
        }
    }, {
        key: "SubtractVal",
        value: function SubtractVal(e) {
            var data = Number(e.target.value);
            this.setState(function (state) {
                return { TotalVal: state.TotalVal - data };
            });
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            var Storage = window.localStorage;
            if (Array.from(Storage).length === 0) {
                null;
            } else {
                for (var i = 0; i < Storage.length; i++) {
                    var key = Storage.key(i);
                    var RawData = Array.from(Storage.getItem(key));
                    var parent = document.getElementById(key);
                    var inputs = Array.from(parent.children);
                    var InpEvent = new Event('input', {
                        'view': window,
                        'bubbles': true,
                        'cancelable': false
                    });
                    var finalData = [];
                    for (var e = 0; e < RawData.length; e++) {
                        var vr = '';
                        if (RawData[e] === '{') {
                            for (var k = e + 1;; k++) {
                                if (RawData[k] === '}') {
                                    e += k;
                                    break;
                                } else {
                                    vr += RawData[k];
                                }
                            }
                        }
                        finalData.push(vr);
                        vr = '';
                    }
                    for (var j = 0; j < 5; j++) {
                        inputs[j].firstElementChild.value = finalData[j];
                        inputs[j].firstElementChild.dispatchEvent(InpEvent);
                    }
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
                        "Valor total $",
                        this.state.TotalVal,
                        React.createElement("br", null),
                        "Costo total $",
                        this.state.TotalCost
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
                    ),
                    React.createElement("input", { id: "Adder", onInput: this.addCost, hidden: true }),
                    React.createElement("input", { id: "Adder2", onInput: this.addVal, hidden: true }),
                    React.createElement("input", { id: "Subtractor", onInput: this.SubtractCost, hidden: true }),
                    React.createElement("input", { id: "Subtractor2", onInput: this.SubtractVal, hidden: true })
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
                    React.createElement(
                        "button",
                        { type: "button", id: "newElement", onClick: this.AddProduct },
                        "Nuevo producto"
                    )
                )
            );
        }
    }]);

    return App;
}(React.Component);

;

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));