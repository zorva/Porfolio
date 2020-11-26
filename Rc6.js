'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IMG = function (_React$Component) {
    _inherits(IMG, _React$Component);

    function IMG(props) {
        _classCallCheck(this, IMG);

        var _this = _possibleConstructorReturn(this, (IMG.__proto__ || Object.getPrototypeOf(IMG)).call(this, props));

        _this.Cng = function () {
            var vl = document.getElementById('inp').value;
            _this.setState({ url: vl });
        };

        _this.state = { url: _this.props.url };
        return _this;
    }

    _createClass(IMG, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'img' },
                React.createElement('img', { src: this.state.url, alt: this.props.desc }),
                React.createElement('br', null),
                React.createElement('input', { id: 'inp' }),
                React.createElement(
                    'button',
                    { onClick: this.Cng },
                    'Change'
                )
            );
        }
    }]);

    return IMG;
}(React.Component);

var Img = React.createElement(IMG, { url: 'images/index.jpeg', desc: 'some dude' });

ReactDOM.render(Img, document.querySelector('#container'));