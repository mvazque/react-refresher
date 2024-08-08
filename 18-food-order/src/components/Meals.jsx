import { useState, useEffect } from 'react';
import MealItem from './MealItem';



export default function Meals() {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        async function getMeals(){
            const response = await fetch('http://localhost:3000/meals'); 
            const resData = await response.json();
        
            if(!response.ok) { // 400, 500
                throw new Error('Failed to fetch places');
            } 
        
            setMeals(resData);
            console.log(resData);
        }
        getMeals();
    }, []);


    return(
        <ul id="meals">
            {meals.map((meal) => (
                <MealItem 
                    key={meal.id}
                    meal={meal}
                />
            ))}
        </ul>
    )
}
