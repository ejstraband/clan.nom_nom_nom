import React from "react";

export const Input = props => (
  <div className="form-group">
    {/* <input className="form-control" {...props} /> */}
    <input {...props} className={`${props.className || ''} form-control`} />
  </div>
);
