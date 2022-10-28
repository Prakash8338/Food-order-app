


import styles from './Header.module.css'
import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import mealImage from '../../assets/meals.jpg'
const Header = props =>{

  return (
    <Fragment>
      <header className = {styles.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick = {props.onShowCart}/>

      </header>
      <div className = {styles['main-image']}>
        <img src = {mealImage} alt ='a table full of delicious meals'/>
      </div>


    </Fragment>

  );



}

export default Header;