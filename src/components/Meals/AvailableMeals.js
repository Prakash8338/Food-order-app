
import styles from './AvailableMeals.module.css';
import Card from '../Cart/Card';
import MealItem from './MealItem/MealItem';
const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 100,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 150,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 60,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 50,
  },
];


const AvailableMeals = () =>{
  const mealsList = DUMMY_MEALS.map((meal) => <MealItem 
  id = {meal.id}
  key = {meal.id}
  name = {meal.name}
  description = {meal.description}
  price = {meal.price}
  />);
  return (
  <section className = {styles.meals}>
    <Card>
    <ul>
      {mealsList}
    </ul>
    </Card>
  </section>
  );

}

export default AvailableMeals;

