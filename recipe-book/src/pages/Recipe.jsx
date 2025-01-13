import React, { useEffect, useState } from 'react'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link, useParams } from 'react-router-dom';
import { fetchRecipeById } from '../utils/fetchApi';
import { CiTimer } from "react-icons/ci";


function Recipe() {

  const [recipe, setRecipe] = useState(null);

  const id = useParams().id;
  console.log(id)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchRecipeById(id)
        setRecipe(response);
        console.log(response)
      } catch (err){
        console.log(err);
      }
    }

    getData();
    console.log(recipe)
  }, [])

  return (
    <>
    <div className='md:flex font-inter'>
      <div className='ml-2 mt-2 md:ml-10 md:mt-6'>
        <Link to={'/'}><button className='px-2 py-2 border items-center justify-center flex border-blue-500 text-blue-500 rounded-lg'><MdOutlineKeyboardArrowLeft /></button></Link>
      </div>

    {recipe &&
      <div className=' sm:mt-2 md:mt-6 px-2 flex flex-col gap-5'>
        <h1 className='text-xl md:text-4xl text-blue-500 text-center'>{recipe.title}</h1>
        <img src={recipe.image} alt={recipe.title} className='mx-auto rounded-lg' />
        <div className='flex justify-center gap-5'>
          <p className='flex text-green-500 items-center gap-1'><CiTimer />{recipe.readyInMinutes || ''} minutes</p>
          <p className=''>{recipe.servings || ''} servings</p>
          <p className={recipe.vegan ? `text-green-500` : `text-red-500`}>{recipe.vegan ? 'Vegetarian' : 'Non-Vegetarian'}</p>
        </div>
        <div className=''>
          <h2 className='text-2xl underline text-center text-blue-500'>Ingredients</h2>
          <ul className='flex list-disc flex-col justify-start align-middle place-items-start'>
            {recipe.extendedIngredients.map((item, key) => {
              return (
                <li key={key}>{item.original}</li>
              )
            }) || ''}
          </ul>
        </div>
        <div className=''>
          <h2 className='text-2xl underline text-center text-blue-500'>Instructions</h2>
          <ol className='flex list-decimal flex-col justify-start align-middle place-items-start'>
            {recipe.analyzedInstructions[0].steps.map((item, key) => {
              return (
                <li key={key}>{item.step}</li>
              )
            }) || ''}
          </ol>
        </div>
      </div>}

    </div>
    </>
  )
}

export default Recipe