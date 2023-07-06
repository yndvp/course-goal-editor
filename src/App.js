import { useState } from 'react';

import './App.css';
import GoalInput from './components/GoalInput/GoalInput';
import GoalList from './components/GoalList/GoalList';

function App() {
  const [goals, setGoals] = useState([
    { id: 'g1', content: 'Do all exercises' },
    { id: 'g2', content: 'Finish the course' },
  ]);

  return (
    <div>
      <GoalInput />
      <GoalList items={goals} />
    </div>
  );
}

export default App;
