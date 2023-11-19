import React from "react";

const ReactionButton = ({ onClick, emoji, count }) => (
  <button onClick={onClick}>
    {emoji} {count}
  </button>
);

export default ReactionButton;
