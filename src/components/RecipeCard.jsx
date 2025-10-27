import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChefHat, ChevronRight } from 'lucide-react'; // optional icon

export default function RecipeCard({ meal }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/recipe/${meal.idMeal}`)}
      className="group relative cursor-pointer bg-white rounded-xl border border-gray-200 overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Image */}
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <ChefHat className="text-amber-500 w-5 h-5 " />
          <span className="text-lg text-gray-500 uppercase tracking-wider mt-[3px]">Recipe</span>
        </div>

        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 group-hover:text-amber-600 transition-colors duration-300">
          {meal.strMeal}
        </h3>

        <div className="mt-3 flex justify-between items-center">
          <button   onClick={() => navigate(`/recipe/${meal.idMeal}`)}
            className="cursor-pointer flex gap-2 items-center text-[16px] font-medium text-amber-600 hover:text-amber-700 transition-colors"
          >
            View Details
             <ChevronRight className='w-5 h-5' />
          </button>
        </div>
      </div>
    </div>
  );
}
