import React from "react";

export function ImageComponent(props) {
  return (
    <div>
      <img alt="" src={require(`../assets/images/${props.image}`)} />
    </div>
  );
}
