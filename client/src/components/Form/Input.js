import React from "react";

export const Input = props => (
  <div className="form-group">
    <input {...props} className={`${props.className || ''} form-control`} />
  </div>
);
