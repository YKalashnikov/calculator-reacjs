var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Calculator = function (_React$Component) {
  _inherits(Calculator, _React$Component);

  function Calculator() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Calculator);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: null,
      displayValue: "0",
      waitingForOperand: false,
      operator: null
    }, _this.handleeKeyDown = function (event) {
      var key = event.key;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Calculator, [{
    key: "clearDidplay",
    value: function clearDidplay() {
      this.setState({
        displayValue: '0'
      });
    }
  }, {
    key: "inputDigit",
    value: function inputDigit(digit) {
      var _state = this.state,
          displayValue = _state.displayValue,
          waitingForOperand = _state.waitingForOperand;


      if (waitingForOperand) {
        this.setState({
          displayValue: String(digit),
          waitingForOperand: false
        });
      } else {

        this.setState({
          displayValue: displayValue === "0" ? String(digit) : displayValue + digit
        });
      }
    }
  }, {
    key: "inputDot",
    value: function inputDot() {
      var _state2 = this.state,
          displayValue = _state2.displayValue,
          waitingForOperand = _state2.waitingForOperand;


      if (waitingForOperand) {
        this.setState({
          displayValue: ".",
          waitingForOperand: false
        });
      } else if (displayValue.indexOf('.') === -1) {
        this.setState({
          displayValue: displayValue + ".",
          waitingForOperand: false
        });
      }
    }
  }, {
    key: "toggleSign",
    value: function toggleSign() {
      var displayValue = this.state.displayValue;

      this.setState({
        displayValue: displayValue.charAt(0) === "-" ? displayValue.substr(1) : "-" + displayValue
      });
    }
  }, {
    key: "inputPercent",
    value: function inputPercent() {
      var displayValue = this.state.displayValue;

      var value = parseFloat(displayValue);

      this.setState({
        displayValue: String(value / 100)
      });
    }
  }, {
    key: "performOperation",
    value: function performOperation(nextOperator) {
      var _state3 = this.state,
          displayValue = _state3.displayValue,
          operator = _state3.operator,
          value = _state3.value;

      var nextValue = parseFloat(displayValue);

      var operations = {
        "/": function _(prevValue, nextValue) {
          return prevValue / nextValue;
        },
        "*": function _(prevValue, nextValue) {
          return prevValue * nextValue;
        },
        "+": function _(prevValue, nextValue) {
          return prevValue + nextValue;
        },
        "-": function _(prevValue, nextValue) {
          return prevValue - nextValue;
        },
        "=": function _(prevValue, nextValue) {
          return nextValue;
        }
      };
      if (value === null) {
        this.setState({
          value: nextValue
        });
      } else if (operator) {
        var currentValue = value || 0;
        var computedValue = operations[operator](currentValue, nextValue);

        this.setState({
          value: computedValue,
          displayValue: String(computedValue)
        });
      }

      this.setState({
        waitingForOperand: true,
        operator: nextOperator
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var displayValue = this.state.displayValue;


      return React.createElement(
        "div",
        { className: "calculator" },
        React.createElement(
          "div",
          { className: "calculator-display" },
          displayValue
        ),
        React.createElement(
          "div",
          { className: "calculator-keypad" },
          React.createElement(
            "div",
            { className: "input-keys" },
            React.createElement(
              "div",
              { className: "function-keys" },
              React.createElement(
                "button",
                { className: " calculator-key key-clear", onClick: function onClick() {
                    return _this2.clearDidplay();
                  } },
                "AC"
              ),
              React.createElement(
                "button",
                { className: "calculator-key key-sign", onClick: function onClick() {
                    return _this2.toggleSign();
                  } },
                "+/-"
              ),
              React.createElement(
                "button",
                { className: "calculator-key key-percent", onClick: function onClick() {
                    return _this2.inputPercent();
                  } },
                "%"
              )
            ),
            React.createElement(
              "div",
              { className: "digit-keys" },
              React.createElement(
                "button",
                { className: "calculator-key key-0", onClick: function onClick() {
                    return _this2.inputDigit(0);
                  } },
                "0"
              ),
              React.createElement(
                "button",
                { className: "calculator-key key-dot", onClick: function onClick() {
                    return _this2.inputDot();
                  } },
                "\u25CF"
              ),
              React.createElement(
                "button",
                { className: "calculator-key key-1", onClick: function onClick() {
                    return _this2.inputDigit(1);
                  } },
                "1"
              ),
              React.createElement(
                "button",
                { className: "calculator-key key-2", onClick: function onClick() {
                    return _this2.inputDigit(2);
                  } },
                "2"
              ),
              React.createElement(
                "button",
                { className: "calculator-key key-3", onClick: function onClick() {
                    return _this2.inputDigit(3);
                  } },
                "3"
              ),
              React.createElement(
                "button",
                { className: "calculator-key key-4", onClick: function onClick() {
                    return _this2.inputDigit(4);
                  } },
                "4"
              ),
              React.createElement(
                "button",
                { className: "calculator-key key-5", onClick: function onClick() {
                    return _this2.inputDigit(5);
                  } },
                "5"
              ),
              React.createElement(
                "button",
                { className: "calculator-key key-6", onClick: function onClick() {
                    return _this2.inputDigit(6);
                  } },
                "6"
              ),
              React.createElement(
                "button",
                { className: "calculator-key key-7", onClick: function onClick() {
                    return _this2.inputDigit(7);
                  } },
                "7"
              ),
              React.createElement(
                "button",
                { className: "calculator-key key-8", onClick: function onClick() {
                    return _this2.inputDigit(8);
                  } },
                "8"
              ),
              React.createElement(
                "button",
                { className: "calculator-key key-9", onClick: function onClick() {
                    return _this2.inputDigit(9);
                  } },
                "9"
              )
            )
          ),
          React.createElement(
            "div",
            { className: "operator-keys" },
            React.createElement(
              "button",
              { className: "calculator-key key-divide", onClick: function onClick() {
                  return _this2.performOperation('/');
                } },
              "\xF7"
            ),
            React.createElement(
              "button",
              { className: "calculator-key key-multiply", onClick: function onClick() {
                  return _this2.performOperation('*');
                } },
              "\xD7"
            ),
            React.createElement(
              "button",
              { className: "calculator-key key-subtract", onClick: function onClick() {
                  return _this2.performOperation('-');
                } },
              "\u2212"
            ),
            React.createElement(
              "button",
              { className: "calculator-key key-add", onClick: function onClick() {
                  return _this2.performOperation('+');
                } },
              "+"
            ),
            React.createElement(
              "button",
              { className: "calculator-key key-equals", onClick: function onClick() {
                  return _this2.performOperation('=');
                } },
              "="
            )
          )
        )
      );
    }
  }]);

  return Calculator;
}(React.Component);

ReactDOM.render(React.createElement(Calculator, null), document.getElementById('app'));