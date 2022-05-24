import React from "react";
import classes from "./Card.module.css";
const Card = (props) => {
  return (
    //props.className = classes.input <- the css name
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};
export default Card;
