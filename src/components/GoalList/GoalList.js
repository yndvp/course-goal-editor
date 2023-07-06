import GoalItem from './GoalItem';
import styles from './GoalList.module.css';

const GoalList = (props) => {
  return (
    <ul className={styles['goal-list']}>
      {props.items.map((item) => (
        <GoalItem key={item.id} id={item.id} onDelete={props.onDeleteItem}>
          {item.content}
        </GoalItem>
      ))}
    </ul>
  );
};

export default GoalList;
