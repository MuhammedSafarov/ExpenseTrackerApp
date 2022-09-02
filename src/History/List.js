import React from "react";
import "./history.css";
import Item from "./Item";

const List = ({ list,onDeleteHandler }) => {
  console.log(list);
  return (
    <ul id="list" className="list">
      {list.map((t) => {
        return(
          <Item 
          onDeleteHandler= {onDeleteHandler}
          key={t.id} 
          t = {t}/>
        )
      })}
    </ul>
  );
};

export default List;
