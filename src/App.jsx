import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Layout from './components/Layout';
import ChatPage from './components/ChatPage';
import FormPage from './components/Form';
import Adaptation from './components/Adaptation';
import UserCard from './components/UserCard';
import ProgressPage from './components/ProgressPage';
import EventsPage from './components/EventsPage';
import ConnectionsPage from './components/ConnectionsPage';
import LoginPage from './components/LoginPage';
import futureTask from './assets/futureTask.png';
import { currentUser } from './mocks/data';


function AppRoutes() {
  const [user, setUser] = useState(currentUser);
  const [showForm, setShowForm] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigation = useNavigate(); // ✅ теперь useNavigate внутри BrowserRouter
  const todayTask = { title: 'Посмотреть вводные видео', image: futureTask };

  useEffect(() => {
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        setIsAuthenticated(true);
        // Обновляем имя пользователя в карточке
        setUser(prev => ({ ...prev, name: savedUser }));
      }
    }, []);

  const handleStatusChange = (updatedStatuses) => {
    setUser(prev => ({
      ...prev,
      statuses: updatedStatuses
    }));
  };

  const handleFormSubmit = (formData) => {
    console.log('Форма отправлена:', formData);
    navigation('/profile'); 
  };

  const handleFormClose = () => {
    setShowForm(false);
  };

  const handleLogin = (username) => {
    setIsAuthenticated(true);
    // Обновляем имя пользователя в карточке
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
        <Route index element={<Navigate to="/profile" replace />} />
        <Route path="/profile" element={<UserCard user={user} onStatusChange={handleStatusChange} />} />
        <Route path="/adaptation" element={<Adaptation />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/events" element={<EventsPage todayTask={todayTask} onClose={() => setShowForm(false)} />} />
        <Route path="/connections" element={<ConnectionsPage />} />
      </Route>
      <Route path="/form" element={<FormPage todayTask={todayTask} onSubmit={handleFormSubmit} onClose={handleFormClose} />} />
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