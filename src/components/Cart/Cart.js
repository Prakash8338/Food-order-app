

import styles from './Cart.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
const Cart = props =>{

const CartCtv = useContext(CartContext);
const totalAmi = `${CartCtv.totalAmount.toFixed(2)}RS`;

const hasItems = CartCtv.items.length > 0;

const cartItemaddhandler = item =>{
  CartCtv.addItem({...item,amount:1});

};

const cartRemovehandler = id =>{

  CartCtv.removeItem(id);

}

const cartItems = CartCtv.items.map(
  Item => <CartItem key = {Item.id} 
  name = {Item.name}
  amount = {Item.amount}
  price = {Item.price}
  onRemove = {cartRemovehandler.bind(null,Item.id)}//will execute in future
  onAdd = {cartItemaddhandler.bind(null,Item)}
  
  />);


return (

  <Modal onClose = {props.onClose}>
    <ul className = {styles['cart-items']}>
    {cartItems}
    </ul>
    <div className = {styles.total}>
      <span> Total Amount</span>
      <span> {totalAmi} </span>
    </div>
    <div className = {styles.actions}>
      <button className = {styles['button--alt']} onClick = {props.onClose}>Cancel</button>
      {hasItems && <button className = {styles.button}>Order</button>}
    </div>
  </Modal>


);

};

export default Cart;