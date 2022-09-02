import React from "react";
import "./transaction.css";

const Transaction = (props) => {
  return (
    <>
      <label htmlFor="text">{props.label}</label>
      <input
        type={props.type}
        onChange={props.onChangeHandler}
        id="text"
        placeholder={props.placeholder}
        value={props.value}
      />
    </>
  );
};

export default Transaction;
