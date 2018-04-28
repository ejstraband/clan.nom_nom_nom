import React from "react";
import CardBtn from "../CardBtn";
import "./Card.css";

const Card = props => (
  <div
    className={`card ${props.className || ""}`}
    style={{
      backgroundImage: props.image ? `url(${props.image})` : "none"
    }}
  >
    {props.children} {/* rendered the contents passed as props*/}
    {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
    <CardBtn
      style={{ opacity: props.image ? 1 : 0 }}
      onClick={props.handleBtnClick}
      data-value="pass"
    />
    <CardBtn
      style={{ opacity: props.image ? 1 : 0 }}
      onClick={props.handleBtnClick}
      data-value="pick"
    />
  </div>
);

export default Card;
