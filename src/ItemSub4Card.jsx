import React from "react";
import "./ItemSub4Card.css";

function ItemSub4Card(props) {
  return (
    <>
      <div id="card">
        <div className="image">
            <img src={props.B1img} alt="" />
        </div>
        <div className="content">
          <p className="name">{props.B1Name}</p>
          <p className="price">{props.B1Price}</p>
        </div>
      </div>
    </>
  );
}

export default ItemSub4Card;
