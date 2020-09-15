import React from "react";
import "./BookItem.css";

export default function BookItem(props) {
  console.log(props);
  let priceJSX = undefined;
  if (props.saleInfo.saleability !== "FOR_SALE") {
    priceJSX = <h4>No price to display</h4>;
  } else if (props.saleInfo.listPrice.amount > 0) {
    priceJSX = <h4>{props.saleInfo.listPrice.amount}</h4>;
  }
  return (
    <div className="bookItem">
      <div className="bookItem__row">
        <div className="bookItemImg">
          <img
            className="bookImg"
            src={props.volumeInfo.imageLinks.smallThumbnail}
            target="_blank"
            alt={`${props.volumeInfo.title}`}
          ></img>
        </div>
        <div className="bookItem__title">
          <h2 className="bookItem-header">{props.volumeInfo.title}</h2>
        </div>
        <div className="bookItemContent">
          <h3>{props.volumeInfo.authors[0]}</h3>
          {priceJSX}
          <p>{props.volumeInfo.description}</p>
        </div>
      </div>
    </div>
  );
}

BookItem.defaultProps = {
  header: "",
  author: "",
  cost: "",
  description: "",
  url: "",
  alt: "",
};
