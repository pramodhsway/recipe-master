import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./index.css";
import { getProductsByNameAction } from "../Actions/AddProduct";

const Search = () => {
  const [products, setProducts] = useState([]);
  const [dbproducts, setDbproducts] = useState([]);
  const [searchText, setSearchText] = useState([]);
  const { productName } = useParams();
  const Navigate = useNavigate();
  const productRef = useRef();
  var searchString = "";

  const searchProductsByName = async () => {
    if (productRef.current.value !== "") {
      await getProductsByNameAction(productRef.current.value).then((data) => {
        setDbproducts(data);
      });
    } else if (productName !== undefined) {
      await getProductsByNameAction(productName).then((data) => {
        setDbproducts(data);
      });
    }
    console.log(dbproducts);
  };

  const searchProducts = () => {
    searchProductsByName();

    if (productRef.current.value !== null && productRef.current.value !== "") {
      searchString = productRef.current.value;
    } else if (productName !== undefined) {
      searchString = productName;
      setSearchText(searchString);
    }
    if (searchString !== "") {
      const options = {
        method: 'GET',
        url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients',
        params: {
          ingredients: searchString,
          ignorePantry: 'true',
          ranking: '1'
        },
        headers: {
          'X-RapidAPI-Key': 'd15b70da04msh9556cdc808e3e68p1d7421jsnff37f9918c16',
          'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
      };

      axios
        .request(options)
        .then(function (response) {
          setProducts(response.data);
          console.log(products);
        })
        .catch(function (error) {});
    }
    Navigate(`/search/${searchString}`);
  };

  useEffect(() => {
    searchProducts();
    // searchProductsByName();
    /* eslint-disable-next-line */
  }, []);

  return (
    <div className="row wd-bg-transparent">
      <div className="mt-3 mb-3">
        <div className="mt-1 mb-3 input-icons">
          <div className="row">
            <div className="col col-10">
              <i className="fas fa-search wd-icon-pos"></i>

              <input
                ref={productRef}
                className="form-control ms-3 ps-5 rounded-pill w-100 d-inline"
                id="text-fields-search"
                placeholder="Search Product"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
            <div className="col col-2">
              <button
                className=" btn btn-primary rounded float-end"
                onClick={() => searchProducts()}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button
                className="accordion-button wd-my-list-button"
                color="blue"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                <strong>Dealer's Choice</strong>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div className="accordion-body">
                <ul className="list-group">
                  {dbproducts.map((prod) => (
                    <li
                      className="list-group-item "
                      style={{backgroundColor: "rgba(194, 227, 227, 0.274)" }}
                      key={"l" + prod._id}
                    >
                      <Link to={`/details_db/${prod._id}`}>
                        <div className="row">
                          <div className="col-2">
                            <img
                              src={prod.imageUrl}
                              className="me-3"
                              height={60}
                              alt="Product"
                            />
                            {/*Heading*/}
                          </div>
                          <div className="col-9">{prod.name}</div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                className="accordion-button collapsed rounded"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                <strong>Search Results</strong>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div className="accordion-body">
                <ul className="list-group">
                  {products.map((prod) => (
                    <li
                      className="list-group-item"
                      style={{ backgroundColor: "rgba(194, 227, 227, 0.274)" }}
                      key={"l" + prod['id']}
                    >
                      <Link to={`/details/${prod['id']}`}>
                        <div className="row">
                          <div className="col-2">
                            <img
                              src={prod['image']}
                              className="me-3"
                              height={60}
                              alt="Product"
                            />
                          </div>
                          <div className="col-9 link-dark">{prod['title']}</div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
