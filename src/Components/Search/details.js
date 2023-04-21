import React, { useState, useEffect } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { isDealerService } from "../../Services/LoginService";
import { AddProductAction } from "../Actions/AddProduct";
import StarRating from "./StarRating";
import "./index.css";
import CreateReviews from "../CreateReviews";

const Details = () => {
  const [productTitle, setproductTitle] = useState([]);
  const [product, setProduct] = useState([]);
  const [priceInfo, setPriceInfo] = useState([]);
  const [productAllDetails, setProductAllDetails] = useState([]);
  const [data, setData] = useState({});
  const { product_id } = useParams();
  const login = useSelector((state) => state.LogIn);
  const params = ['vegetarian','aggregateLikes','glutenFree','dishTypes','healthScore','diets','pricePerServing','readyInMinutes',
  'servings','instructions']
  const paramsNew = ['name','price']

  const addToCart = () => {
    AddProductAction(data);
  };
  const productDetails = () => {
    const options = {
      method: 'GET',
      url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${product_id}/information`,
      headers: {
        'X-RapidAPI-Key': 'd15b70da04msh9556cdc808e3e68p1d7421jsnff37f9918c16',
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
      }
    };

    axios
      .request(options)
      .then(function (response) {
        setproductTitle(response.data['title']);
        setProduct(response.data);
        setProductAllDetails(response.data);
        setData({
          ...data,
          name: response.data['title'],
          asin: product_id,
          imageUrl: response.data['image']
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const priceBreakdown = () => {
    const options = {
      method: 'GET',
      url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${product_id}/priceBreakdownWidget.json`,
      headers: {
        'X-RapidAPI-Key': 'd15b70da04msh9556cdc808e3e68p1d7421jsnff37f9918c16',
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
      }
    };

    axios
        .request(options)
        .then(function (response) {
          setPriceInfo(response.data['ingredients']);
        })
        .catch(function (error) {
          console.error(error);
        });
  };

  useEffect(() => {
    productDetails();
    priceBreakdown();

    /* eslint-disable-next-line */
  }, []);

  return (
    <div>
      <br></br>
      <div>
        <h1>{productTitle}</h1>

        {/*<div className="row">*/}
        {/*  <div className="col">*/}
        {/*    {login.logedIn && isDealerService() && (*/}
        {/*      <button*/}
        {/*        className="col-2 btn-primary float-end rounded"*/}
        {/*        onClick={() => {*/}
        {/*          addToCart();*/}
        {/*        }}*/}
        {/*      >*/}
        {/*        Add Product*/}
        {/*      </button>*/}
        {/*    )}*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div className="my-3 mx-auto" style={{ textAlign: "center" }}>
          <img
            src={productAllDetails['image']}
            height={300}
            alt="All product Details"
          />
        </div>
        <ul className="list-group mt-5">
          {Object.keys(product).filter(function(prod) {
            if (params.includes(prod) && product[prod]!==null) {
              return true;
            }
            return false;
          }).map((prod) => (
            <li className="list-group-item">
              <div className="row">
                <div className="col-md-4 ">
                  <span>
                    <b>{prod.replaceAll("_", " ").trim()}</b>
                  </span>{" "}
                  :
                </div>
                <div className="col-md-8 ">
                  <span>{String(product[prod])}</span>
                </div>
              </div>
            </li>
          ))}
          <br></br>
          <h4>Ingredients breakdown</h4>
          {Object.keys(priceInfo).map((prod) => (
              <li className="list-group-item">
                <div className="row">
                  <div className="col-md-4 ">
                  <span>
                    <b>{priceInfo[prod]['name'].replaceAll("_", " ").trim()}</b>
                  </span>{" "}
                    :
                  </div>
                  <div className="col-md-8 ">
                    <span>{String(priceInfo[prod]['price'])}</span>
                  </div>
                </div>
              </li>
          ))}
          {<li className="list-group-item">
            <div className="row">
              <div className="col-md-4">
                <span>
                  <b>Trusted User Rating</b>
                </span>{" "}
                :
              </div>
              <div className="col-md-8">
                <span>
                  <StarRating />
                </span>
              </div>
            </div>
          </li> }
          {/*{login.logedIn && (*/}
          {/*    <div>*/}
          {/*      <CreateReviews productID={productAllDetails['id']} product={product} />*/}
          {/*    </div>*/}
          {/*)}*/}
        </ul>
      </div>
    </div>
  );
};

export default Details;
