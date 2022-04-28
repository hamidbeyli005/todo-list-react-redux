import React from "react";
import "../Styles.scss";


function Button(props) {
  return (
    <div>
      <button className="button" style={{background:props.color}} >{props.text} </button>
      
    </div>
  );
}

export default Button;
