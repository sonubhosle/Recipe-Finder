import React, { useState } from 'react';
import { Search, UtensilsCrossed } from 'lucide-react'; // optional icon

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  function submit(e) {
    e.preventDefault();
    if (!query.trim()) return;
    onSearch(query);
  }

  return (
    <div className="w-full flex flex-col items-center text-center py-10 px-4">
        <div className="flex items-center gap-2 mb-6">
        <div className="bg-amber-500 p-2 rounded-full shadow-md">
          <UtensilsCrossed className="text-white w-6 h-6" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 tracking-wide">
          Meal<span className="text-amber-600">Mate</span>
        </h1>
      </div>
      {/* Heading Section */}
      <div className="mb-6 max-w-xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
          Find Delicious Recipes
        </h1>
        <p className="text-gray-500 text-sm sm:text-base">
          Search by ingredient and discover meals you can make today.
        </p>
      </div>

      {/* Search Form */}
      <form
        onSubmit={submit}
        className="flex w-full max-w-xl gap-2 bg-white p-2 rounded-xl shadow-md focus-within:ring-2 focus-within:ring-blue-500 transition"
      >
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter an ingredient (e.g., chicken, rice...)"
            className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-0 text-gray-700"
          />
        </div>

        <button
          type="submit"
          className="px-5 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-md hover:from-blue-600 hover:to-indigo-700 transition"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
