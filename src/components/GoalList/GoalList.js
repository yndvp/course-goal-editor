import GoalItem from './GoalItem';

const GoalList = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <GoalItem key={item.id} id={item.id}>
          {item.content}
        </GoalItem>
      ))}
    </ul>
  );
};

export default GoalList;
