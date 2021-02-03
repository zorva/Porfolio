function Todo(props) {
  return React.createElement(
    "li",
    { className: "todo stack-small" },
    React.createElement(
      "div",
      { className: "c-cb" },
      React.createElement("input", { id: props.id, type: "checkbox", defaultChecked: props.completed }),
      React.createElement(
        "label",
        { className: "todo-label", htmlFor: "todo-0" },
        props.name
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
          props.name
        )
      ),
      React.createElement(
        "button",
        { type: "button", className: "btn btn__danger" },
        "Delete ",
        React.createElement(
          "span",
          { className: "visually-hidden" },
          props.name
        )
      )
    )
  );
}