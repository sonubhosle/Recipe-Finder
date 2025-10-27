import React from 'react'
import RecipeCard from './RecipeCard'

export default function RecipeList({ meals }) {
  return (
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
  {meals.map((meal) => (
    <RecipeCard key={meal.idMeal} meal={meal} />
  ))}
</div>

  )
}
