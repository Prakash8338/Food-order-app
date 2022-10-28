

import styles from './MealForm.module.css';
import Input from '../../UI/Input';
import { useRef, useState } from 'react';
const MealItemForm = props =>{
  const [amountValid, setAmountValid] = useState(true);
  const amountRef = useRef();
  const submitHandler = event =>{
    event.preventDefault();

    const enteredAmount = amountRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
      setAmountValid(false);
      return;

    }


    props.onAddto(enteredAmountNumber);
    



  }

  return (
    <form className = {styles.form} onSubmit = {submitHandler}>
      <Input ref = {amountRef} label = "amount" input = {{
        id: 'amount_'+ props.id,
        type : 'number',
        min: '1',
        max: '5',
        step : '1',
        defaultValue: '1'}}
      />
      <button>
        + Add
      </button>
      {!amountValid && <p>please entered valid amount</p>}
    </form>

  );

};

export default MealItemForm;