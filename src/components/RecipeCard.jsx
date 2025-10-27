import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChefHat, ChevronRight } from 'lucide-react';

export default function RecipeCard({ meal }) {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div onClick={() => navigate(`/recipe/${meal.idMeal}`)} className="group relative cursor-pointer bg-white rounded-xl border border-gray-200 overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl" >
      {/* Image Section*/}
      <div className="relative w-full h-60 overflow-hidden bg-gray-100">
        {/* Skeleton shimmer while image loads */}
        {!imageLoaded && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />
        )}

        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 ${
            imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          } group-hover:scale-110`}
        />

        {/* Overlay gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <ChefHat className="text-amber-500 w-5 h-5" />
          <span className="text-sm text-gray-500 uppercase tracking-wider mt-[2px]">
            Recipe
          </span>
        </div>

        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 group-hover:text-amber-600 transition-colors duration-300">
          {meal.strMeal}
        </h3>

        <div className="mt-3 flex justify-between items-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/recipe/${meal.idMeal}`);
            }}
            className="cursor-pointer flex gap-2 items-center text-[16px] font-medium text-amber-600 hover:text-amber-700 transition-colors"
          >
            View Details
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
