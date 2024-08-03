import React from 'react';
import { Link } from 'react-router-dom';
import sampleRecipes from '../sampleRecipes'; // Assuming sampleRecipes.js is correctly imported and contains the recipes data

const Home = () => {
  const types = ['Chinese', 'Continental' ,'Thai'];

  // Use sampleRecipes data to populate topRecipes
  const topRecipes = sampleRecipes.slice(0, 3); // Assuming you want to show the first 3 recipes as top recipes

  return (
    <div className="home">
      <h1>Welcome To React Recipe</h1>
      <p className="description">
        Welcome to Simply Recipes!

        Discover a world of delicious recipes, from quick weeknight dinners to indulgent desserts. Our easy-to-follow instructions and vibrant photos make cooking a joy. Join our community of food lovers, share your culinary creations, and explore new flavors every day. Let’s cook up something amazing together!
      </p>
      <h2>Categories</h2>
      <ul className="food-types">
        {types.map((type, index) => (
          <li key={index}>
            <Link to={`/type/${type.toLowerCase()}`}>{type}</Link>
          </li>
        ))}
      </ul>
      <h2>Top Recipes</h2>
      <div className="top-recipes">
        {topRecipes.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} />
            <h3>{recipe.title}</h3>
            <Link to={`/recipe/${recipe.id}`}>View Recipe</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
