
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import styles from './meal.module.css';
import MealItemForm from './MealItemForm';
const MealItem = props =>{
  const cartCt = useContext(CartContext);

  const price = `${props.price.toFixed(2)}RS`;

  const onaddcarthandler = amount =>{

    cartCt.addItem({
      id: props.id,
      amount: amount,
      price: props.price,
      name : props.name,
    });


  };

  return (

    <li className = {styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className = {styles.description}>{props.description}</div>
        <div className = {styles.price}>{price}</div>
      </div>
      <div>

        <MealItemForm onAddto = {onaddcarthandler} id = {props.id}/>


        
      </div>

    </li>


  );


};

export default MealItem;