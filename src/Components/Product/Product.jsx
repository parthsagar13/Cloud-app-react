import React from "react";
import { allProducts } from "../../AllProducts";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/action.js";
import {
  FaShoppingCart,
  FaStar,
  FaShopify,
  FaAngleRight,
} from "react-icons/fa";
import { Section } from "./Styled-Product";
import ratingImg from "./rating.png";
import "./product.css";
let i;
let discount = Math.floor(Math.random() * 150);
export default function Product() {
  let allImages = [
    // "https://source.unsplash.com/random/?cloths",
    // "https://source.unsplash.com/random/?shoes",
    // "https://source.unsplash.com/random/?kids",
    // "https://source.unsplash.com/random/?motivation",
    // "https://source.unsplash.com/random/?nature",
  ];
  let { id } = useParams();
  let [state, setState] = React.useState("Add to Cart");
  let [image, setImage] = React.useState("");
  let cart = useSelector((state) => state.cart);
  let dispatch = useDispatch();
  console.log(id);
  for (i = 0; i < allProducts.length; i++) {
    if (allProducts[i].id === +id) {
      break;
    }
  }
  if (cart.includes(+id)) state = "Already in the Cart";

  const clcHandler = (e) => {
    dispatch(addToCart(e.target.id));
    if (state === "Add to Cart") setState("Already in the Cart");
  };

  console.log(allProducts[i], i);
  let { img, name, soldBy, similar, sprice, aprice, rating, reviews, details } =
    allProducts[i] || allProducts[0];
  React.useEffect(() => {
    setImage(img);
    window.scrollTo(0, 0);
  }, [img]);
  return (
    <Section id="single-product">
      <article id="product-article-1">
        {/* {allImages.map((i) => (
          <img src={i} alt="" onClick={() => setImage(i)} />
        ))} */}
      </article>
      <article id="product-article-2">
        <img src={image} alt="" id="main-img" />
        {/* <p className="more">+ {Math.floor(Math.random() * 7) + 1} More</p> */}
        <button id={+id} onClick={clcHandler}>
          <FaShoppingCart /> {state}
        </button>
        {/* <hr />
        <p>3 Similar products</p>
        <div>
          {similar.map((i) => (
            <img src={i} alt="" onClick={() => setImage(i)} />
          ))}
        </div> */}
      </article>
      <article id="product-article-3">
        <div id="price">
          <h2>{name}</h2>
          <h3 className="price">
            ₹{sprice} <span className="aprice">₹{aprice}</span>{" "}
            <span className="discount">
              {((1 - sprice / aprice) * 100).toFixed(1)}% off
            </span>
          </h3>
          <h4 className="rating">
            <span>
              {rating} <FaStar />
            </span>{" "}
            {reviews} Reviews
          </h4>
          <p>Free Delivery</p>
        </div>
        <div id="size">
          <p>Select Size</p>
          <button>S</button>
          <button>M</button>
          <button>L</button>
          <button>XL</button>
          <button>XXL</button>
          <button>3XL</button>
          <button>4XL</button>
          <button>5XL</button>
        </div>
        <div id="details">
          <p>Product Details</p>
          {details.map((i) => (
            <p>{i}</p>
          ))}
        </div>
      </article>
    </Section>
  );
}
