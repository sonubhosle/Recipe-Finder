// Api Url
const BASE_URL = 'https://www.themealdb.com/api/json/v1/1'


export async function searchMealsByIngredient(ingredient) {
    try {

        const query = encodeURIComponent(ingredient.trim());
        const response = await fetch(`${BASE_URL}/filter.php?i=${query}`);
        if (!response.ok) throw new Error('Api Response not ok');
        const data = await response.json();
        return data.meals;

    } catch (error) {
        console.log(error, "Something wen't Wrong")
    }

}

export async function getMealDetails(idMeal) {
    try {
        const response = await fetch(`${BASE_URL}/lookup.php?i=${idMeal}`);
        if (!response.ok) throw new Error('Network response not ok');
        const data = await response.json();
        
        return data.meals ? data.meals[0] : null;
    } catch (err) {
        throw err;
    }
}