import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMealDetails } from '../services/api';
import { ArrowLeft, ChefHat, UtensilsCrossed } from 'lucide-react';

export default function RecipeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMeal() {
      try {
        const data = await getMealDetails(id);
        setMeal(data);
      } catch (error) {
        console.error('Error fetching meal details:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchMeal();
  }, [id]);

  if (loading)
    return (
      <div className="flex flex-col space-y-3 justify-center items-center min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
          <p className='text-2xl font-semibold'>Recipe Details</p>
      </div>
    );

  if (!meal)
    return (
      <div className="p-6 text-center text-gray-600 min-h-screen flex items-center justify-center">
        No meal found.
      </div>
    );

  // Collect ingredients
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ing = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ing && ing.trim())
      ingredients.push(`${measure ? measure : ''} ${ing}`.trim());
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 pb-20">
      {/* Hero Section */}
      <div className="relative w-full h-72 md:h-96 overflow-hidden">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-full object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-2 drop-shadow-md">
            {meal.strMeal}
          </h1>
          <p className="text-sm md:text-base opacity-90">
            {meal.strArea} • {meal.strCategory}
          </p>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-5 left-5 bg-white/80 hover:bg-white text-gray-700 rounded-full p-2 shadow-md transition"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-5 mt-10 space-y-10">
        {/* Ingredients Section */}
        <section className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
          <div className="flex items-center gap-2 mb-4">
            <ChefHat className="text-amber-500 w-6 h-6" />
            <h2 className="text-2xl font-bold text-gray-800">Ingredients</h2>
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {ingredients.map((it, idx) => (
              <li
                key={idx}
                className="bg-amber-50 border border-amber-100 text-gray-700 rounded-lg px-3 py-2 text-sm font-medium hover:bg-amber-100 transition"
              >
                {it}
              </li>
            ))}
          </ul>
        </section>

        {/* Instructions Section */}
        <section className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
          <div className="flex items-center gap-2 mb-4">
            <UtensilsCrossed className="text-amber-500 w-6 h-6" />
            <h2 className="text-2xl font-bold text-gray-800">Instructions</h2>
          </div>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {meal.strInstructions}
          </p>
        </section>

        {/* Video Section */}
        {meal.strYoutube && (
          <section className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Watch Recipe Video 
            </h2>
            <div className="w-full h-100">
              <iframe
                src={`https://www.youtube.com/embed/${meal.strYoutube.split('v=')[1]}`}
                title="Recipe Video"
                className="w-full h-full rounded-lg"
                allowFullScreen
              ></iframe>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
