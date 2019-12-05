import React from "react";
export default ({ updatedTime, chatCount }) => {
  return (
    <div className="Column-tail">
      <div className="Column-tail-top">{updatedTime}</div>
      <div className="Column-tail-bottom">{chatCount}</div>
    </div>
  );
};
