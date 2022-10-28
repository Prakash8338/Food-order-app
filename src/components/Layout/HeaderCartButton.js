

import styles from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon';
import { useContext, useEffect , useState} from 'react';
import CartContext from '../../store/cart-context';
const HeaderCartButton = props =>{

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const numberOfItems = cartCtx.items.reduce((curNumber,item) =>{
    return curNumber + item.amount;
  }, 0);



  const { items } = cartCtx;




  const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);


  return (
    <button className = {btnClasses} onClick = {props.onClick}>
      <span className = {styles.icon}>
        <CartIcon />
      </span>
      <span>
        Your cart

      </span>
      <span className = {styles.badge}>
        {numberOfItems}

      </span>
    </button>

  );

}


export default HeaderCartButton;

