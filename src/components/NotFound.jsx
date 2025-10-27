export default function NotFound(){
    return(
          <div className="flex flex-col items-center justify-center py-16 text-center space-y-4 animate-fadeIn">
    <div className="text-6xl">🍳</div>
    <h3 className="text-xl font-semibold text-gray-700">
      No recipes found
    </h3>
    <p className="text-gray-500 max-w-md">
      We couldn’t find any recipes for that ingredient. Try searching with
      something else — maybe <span className="font-medium text-gray-700">“chicken”</span> or
      <span className="font-medium text-gray-700"> “pasta”</span>.
    </p>
    <button
      onClick={() => window.location.reload()}
      className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
    >
      Try Again
    </button>
  </div>
    )
}