
function FilterButton(props) {
  return React.createElement(
    "button",
    { type: "button", className: "btn toggle-btn", "aria-pressed": "true" },
    React.createElement(
      "span",
      { className: "visually-hidden" },
      "Show "
    ),
    React.createElement(
      "span",
      null,
      "all "
    ),
    React.createElement(
      "span",
      { className: "visually-hidden" },
      " tasks"
    )
  );
}