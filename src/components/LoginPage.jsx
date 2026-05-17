import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import logo from '../assets/25-naumen_orange.png';

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Временные учетные данные (потом можно будет заменить на реальные)
  const validCredentials = {
    'Панда ТапТапыч': 'panda123',
    'Бадди': 'buddy123',
    'admin': 'admin123'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Проверяем логин и пароль
    if (validCredentials[username] === password) {
      // Сохраняем имя пользователя
      localStorage.setItem('user', username);
      onLogin(username);
      navigate('/profile'); // Перенаправляем на профиль
    } else {
      setError('Неверный логин или пароль');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <h1 className={styles.title}>Вход в систему</h1>
        <p className={styles.subtitle}>Адаптация сотрудников NAUMEN</p>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label>Логин</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Введите ваш логин"
              required
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Пароль</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Введите пароль"
              required
              className={styles.input}
            />
          </div>

          {error && <p className={styles.error}>{error}</p>}

          <button type="submit" className={styles.button}>
            Войти
          </button>
        </form>

        <p className={styles.demo}>
          если что-то забыли: логин "Панда ТапТапыч", пароль "panda123"
        </p>
      </div>
    </div>
  );
}

export default LoginPage;