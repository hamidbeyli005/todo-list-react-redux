import alertify from "alertifyjs";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/TodoSlice";
import "../Styles.scss";
import Button from "./Button";


function Input(props) {
  const [value, setValue] = useState();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    if (value) {
      dispatch(addTodo(value));
      alertify.success( value + ' elave olundu');
      setValue("")
    } else {
      alertify.confirm('Zehmet olmasa todo yazin' ).autoOk(4)
    }
    e.preventDefault();
  };

  return (
    <div>
      <form
        className="input"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          placeholder={props.placeholder}
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <Button color="blue" text="Submit"></Button>
      </form>
    </div>
  );
}

export default Input;
