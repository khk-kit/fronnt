import React, { useState, Fragment } from "react";
import MetaData from "../layout/Metadata";
import { useNavigate } from "react-router-dom";
import "./Search.css";


const Search = () => {
    const [keyword, setKeyword] = useState("");

    const navigate = useNavigate();


  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/shop/${keyword}`);
    } else { 
      navigate("/shop");
    }
  };

  return (
    <Fragment>
      <MetaData title="Search A Product -- BRAVE Athleisure" />
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search a Product ..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </Fragment>
  );
}

export default Search