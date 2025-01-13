import axios from 'axios';

const API_KEY = "36c3fa40242b445391ddd7d022dd0d98";

export const fetchRandomRecipes = async () => {
    try{
    const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=12`);
    return response.data.recipes;
    } catch (err) {
        console.log(err);
    }
}


export const fetchRecipeById = async (id) => {
    try {
    const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
    return response.data;
    } catch (err){
        console.log(err);
    }
}


export const fetchRecipeByName = async (name) => {
    try {
        console.log('method called')
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${name}`);
        return response.data.results;
    } catch (err) {
        console.log(err)
    }
}