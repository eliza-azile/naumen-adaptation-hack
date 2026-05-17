import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Layout from './components/common/Layout';
import ChatPage from './components/pages/ChatPage';
import FormPage from './components/pages/Form';
import Adaptation from './components/pages/Adaptation';
import UserCard from './components/pages/UserCard';
import ProgressPage from './components/pages/ProgressPage';
import EventsPage from './components/pages/EventsPage';
import ConnectionsPage from './components/pages/ConnectionsPage';
import HRDashboard from './components/pages/HRDashboard';
import LoginPage from './components/pages/LoginPage';
import { steps as initialSteps, currentUser } from './mocks/data';
import futureTask from './assets/images/futureTask.png';

function AppRoutes() {
  const [user, setUser] = useState(currentUser);
  const [showForm, setShowForm] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [steps, setSteps] = useState(initialSteps);
  const navigation = useNavigate();
  const todayTask = { title: 'Посмотреть вводные видео', image: futureTask };
  const completedCount = steps.filter(step => step.done).length;
  const progressPercent = (completedCount / steps.length) * 100;

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setIsAuthenticated(true);
      setUser(prev => ({ ...prev, name: savedUser }));
    }
  }, []);

  const handleToggle = (id) => {
    console.log('Toggle step:', id);
    setSteps(prevSteps => 
      prevSteps.map(step => 
        step.id === id ? { ...step, done: !step.done } : step
      )
    );
  };

  // Объединяем две функции в одну
  const handleStatusChange = (statusKeyOrObject) => {
    // Если передан объект (обновление статусов целиком)
    if (typeof statusKeyOrObject === 'object' && !Array.isArray(statusKeyOrObject)) {
      setUser(prev => ({
        ...prev,
        statuses: statusKeyOrObject
      }));
    } 
    // Если передан ключ (переключение конкретного статуса)
    else if (typeof statusKeyOrObject === 'string') {
      setUser(prev => ({
        ...prev,
        statuses: {
          ...prev.statuses,
          [statusKeyOrObject]: !prev.statuses[statusKeyOrObject]
        }
      }));
    }
  };

  const handleFormSubmit = (formData) => {
    console.log('Форма отправлена:', formData);
  };

  const handleFormClose = () => {
    setShowForm(false);
  };

  const handleLogin = (username) => {
    setIsAuthenticated(true);
    setUser(prev => ({ ...prev, name: username }));
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    navigation('/');
  };

  // Если не авторизован - показываем страницу входа
  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout onLogout={handleLogout} />}>
        <Route index element={<Navigate to="/adaptation" replace />} />
        <Route path="/profile" element={<UserCard user={user} onStatusChange={handleStatusChange} />} />
        <Route path="/hr" element={<HRDashboard />} />
        <Route path="/adaptation" element={<Adaptation steps={steps} onToggle={handleToggle} />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/connections" element={<ConnectionsPage />} />
      </Route>
     <Route path="/form" element={<FormPage todayTask={todayTask} onSubmit={handleFormSubmit} />} />
      <Route path="/chat" element={<ChatPage />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;