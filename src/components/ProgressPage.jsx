import { useState } from 'react';
import { steps } from '../mocks/data';


function ProgressPage() {
  const [stepsList, setStepsList] = useState(steps);
  const toggle = (id) => {
    setStepsList(prev => prev.map(s => s.id === id ? { ...s, isCompleted: !s.isCompleted } : s));
  };
  const completed = stepsList.filter(s => s.isCompleted).length;
  const percent = stepsList.length ? (completed / stepsList.length) * 100 : 0;
  return (
    <div>
      <h2>Прогресс адаптации</h2>
      <div style={{ background: '#eee', borderRadius: 10, marginBottom: 20 }}>
        <div style={{ width: `${percent}%`, background: '#4caf50', borderRadius: 10, padding: 4, color: 'white' }}>{Math.round(percent)}%</div>
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {stepsList.map(step => (
          <li key={step.id} style={{ margin: '8px 0' }}>
            <label>
              <input type="checkbox" checked={step.isCompleted} onChange={() => toggle(step.id)} />
              {step.title}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ProgressPage;