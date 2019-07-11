import React from "react";

const Photo = props => {
  console.log("Photo props", props);
  return <img src={props.url} alt="NASA APOD" />;
};

export default Photo;
