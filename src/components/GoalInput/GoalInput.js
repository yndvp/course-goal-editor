import { useState } from 'react';

import Button from '../UI/Button';
import styles from './GoalInput.module.css';

const GoalInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');

  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={styles['form-control']}>
        <label>Course Goal</label>
        <input type='text' value={enteredValue} onChange={inputChangeHandler} />
      </div>
      <Button type='submit'>Add Goal</Button>
    </form>
  );
};

export default GoalInput;
