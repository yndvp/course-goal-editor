import styles from './GoalItem.module.css';

const GoalItem = (props) => {
  return <li className={styles['goal-item']}>{props.children}</li>;
};

export default GoalItem;
