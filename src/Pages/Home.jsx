import React, { useState } from 'react';
import { searchMealsByIngredient } from '../services/api';
import SearchBar from '../components/SearchBar';
import RecipeList from '../components/RecipeList';
import { Search } from 'lucide-react';
import NotFound from '../components/NotFound';

const Home = () => {
  const [meals, setMeals] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);
    setMeals(null);
    try {
      const response = await searchMealsByIngredient(query);
      setMeals(response || []);
    } catch (error) {
      setError('Unable to fetch recipes. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 px-4 py-10">
      <div className="max-w-7xl mx-auto space-y-10">


        {/* Search Bar */}
        <SearchBar onSearch={handleSearch} />

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-16">
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-gray-600">Fetching recipes...</p>
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="text-center py-8">
            <p className="text-red-600 font-medium">{error}</p>
          </div>
        )}

        {/* No Results */}
        {!loading && meals && meals.length === 0 && (<NotFound />)}


        {/* Recipes Grid */}
        {!loading && meals && meals.length > 0 && (
          <div className="pt-4">
            <RecipeList meals={meals} />
          </div>
        )}

        {/* Initial State */}
        {!loading && meals === null && (
          <div className="mt-10 text-gray-500 text-center flex flex-col items-center gap-3">
            <Search className="w-8 h-8 text-amber-500" />
            <p className="text-base">
              Try searching for an ingredient — like <span className="font-semibold text-amber-600">chicken</span>, <span className="font-semibold text-amber-600">rice</span>, or <span className="font-semibold text-amber-600">onion</span>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
