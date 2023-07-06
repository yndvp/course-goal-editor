import { useState } from 'react';

import './App.css';
import GoalInput from './components/GoalInput/GoalInput';
import GoalList from './components/GoalList/GoalList';

function App() {
  const [goals, setGoals] = useState([
    { id: 'g1', content: 'Do all exercises' },
    { id: 'g2', content: 'Finish the course' },
  ]);

  const addGoalHandler = (text) => {
    setGoals((prevState) => [
      { id: Math.random().toString(), content: text },
      ...prevState,
    ]);
  };

  const deleteItemHandler = (goalId) => {
    setGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  return (
    <div>
      <section id='goal-form'>
        <GoalInput onAddGoal={addGoalHandler} />
      </section>
      <section id='goals'>
        <GoalList items={goals} onDeleteItem={deleteItemHandler} />
      </section>
    </div>
  );
}

export default App;
