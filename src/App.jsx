import { useState } from 'react'
import Checklist from './components/Checklist'
import ProgressBar from './components/ProgressBar'
import UserCard from './components/UserCard'
import { steps as initialSteps, currentUser } from './mocks/data'

function App() {
  // Состояние для шагов чеклиста
  const [steps, setSteps] = useState(initialSteps)
  
  // Состояние для пользователя
  const [user, setUser] = useState(currentUser)

  // Переключение чекбокса в чеклисте
  const handleToggle = (id) => {
    console.log('Toggle step:', id)
    setSteps(prevSteps => 
      prevSteps.map(step => 
        step.id === id ? { ...step, done: !step.done } : step
      )
    )
  }

  // Переключение тумблеров в карточке
  const handleStatusChange = (statusKey) => {
    console.log('Change status:', statusKey)
    setUser(prev => ({
      ...prev,
      statuses: {
        ...prev.statuses,
        [statusKey]: !prev.statuses[statusKey]
      }
    }))
  }

  // Считаем прогресс
  const completedCount = steps.filter(step => step.done).length
  const progressPercent = (completedCount / steps.length) * 100

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Адаптация сотрудника</h1>
      
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <UserCard user={user} onStatusChange={handleStatusChange} />
        
        <div style={{ minWidth: '300px', flex: 1 }}>
          <ProgressBar percent={progressPercent} />
          <Checklist steps={steps} onToggle={handleToggle} />
        </div>
      </div>
    </div>
  )
}

export default App