import React, { useEffect, useState } from "react";
import { fetchRandomRecipes, fetchRecipeByName } from "../utils/fetchApi";
import RecipeCard from "../components/RecipeCard";
import Shimmer from "../components/Shimmer";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

function Home() {
  const [data, setData] = useState(null);
  const [searchRecipe, setSearchRecipe] = useState("");

  function handleChange(e) {
    setSearchRecipe(e.target.value);
  }

  function searchByName(){
    if(searchRecipe.length > 0) {
        const getSingleData = async () => {
            try {
              const response = await fetchRecipeByName(searchRecipe);
              setData(response);
              console.log(response);
            } catch (err) {
              console.log(err);
            }
          };

        getSingleData();
        console.log(data)
    }
  }

  useEffect(() => {
    
    const getData = async () => {
      try {
        const response = await fetchRandomRecipes();
        setData(response);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
    console.log(data);
  }, []);

  return (
    <>
      <div className="px-4 md:px-16 w-full h-10 flex gap-2 items-center justify-center">
        <input
          className="border px-6 h-full w-full rounded-lg border-blue-500"
          type="text"
          name="searchRecipe"
          value={searchRecipe}
          onChange={handleChange}
          placeholder="Search by name..."
        />
        <button onClick={searchByName} className="border text-blue-500 w-12 h-full items-center justify-center flex border-blue-500 rounded-lg">
          <CiSearch />
        </button>
      </div>

      <div className="flex gap-5 px-2 md:px-16 py-4 flex-wrap justify-center items-center">
        {data ? (
          data.map((item, key) => {
            return (
              <Link to={`/recipe/${item.id}`}>
                <RecipeCard key={item.id} values={item} />
              </Link>
            );
          })
        ) : (
          <div className="flex gap-5 px-2 md:px-16 py-4 flex-wrap justify-center items-center">
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
