function Todo() {
  return React.createElement(
    "li",
    { className: "todo stack-small" },
    React.createElement(
      "div",
      { className: "c-cb" },
      React.createElement("input", { id: "todo-0", type: "checkbox", defaultChecked: true }),
      React.createElement(
        "label",
        { className: "todo-label", htmlFor: "todo-0" },
        "Eat"
      )
    ),
    React.createElement(
      "div",
      { className: "btn-group" },
      React.createElement(
        "button",
        { type: "button", className: "btn" },
        "Edit ",
        React.createElement(
          "span",
          { className: "visually-hidden" },
          "Eat"
        )
      ),
      React.createElement(
        "button",
        { type: "button", className: "btn btn__danger" },
        "Delete ",
        React.createElement(
          "span",
          { className: "visually-hidden" },
          "Eat"
        )
      )
    )
  );
}