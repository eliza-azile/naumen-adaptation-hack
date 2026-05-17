import { NavLink, Outlet, useLocation, Link } from "react-router-dom";
import styles from './Layout.module.css';
import logo from '../../assets/images/25-naumen_orange.png';
import chat from '../../assets/images/chat.png';
import panda from '../../assets/images/panda.png';
import { useState } from "react";


function Layout({ onLogout }) {  
    const location = useLocation();
    const [showForm, setShowForm] = useState(false);

    const getTitle = () => {
        switch (location.pathname) {
            case '/profile': return 'КАРТОЧКА СОТРУДНИКА';
            case '/progress': return 'ТЕКУЩИЙ ПРОГРЕСС';
            case '/events': return 'МЕРОПРИЯТИЯ';
            case '/connections': return 'ЗНАКОМСТВА';
            case '/form': return 'ЕЖЕДНЕВНЫЙ ОТЧЕТ';
            case '/chat': return 'ЧАТ С ПАНДОЙ';
            default: return '';
        }
    };

    return (
        <div className={styles.layout}>
            <header className={styles.header}>
                <Link to='/profile' className={styles.logoLink}>
                    <img src={logo} alt="Логотип" className={styles.logoImage} />             
                </Link>
                <h1 className={styles.title}>{getTitle()}</h1>
                {/* Добавить кнопку выхода */}
                <button onClick={onLogout} className={styles.logoutButton}>
                    Выйти
                </button>
            </header>
            <div className={styles.container}>
                <aside className={styles.sidebar}>
                    <div className={styles.menuTitle}>Разделы</div>
                    <nav className={styles.menu}>
                        <NavLink to="/profile" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>Твоя карточка</NavLink>
                        <NavLink to="/progress" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>Текущий прогресс</NavLink>
                        <NavLink to="/events" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>Мероприятия</NavLink>
                        <NavLink to="/connections" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>Знакомства</NavLink>
                        <NavLink to="/chat">
                            <img src={chat} alt="Чат" className={styles.chat}/>
                        </NavLink>
                        <NavLink to="/form">
                            <img src={panda} alt="Форма" className={styles.panda}/>
                        </NavLink>
                    </nav>
                </aside>
                <main className={styles.content}>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default Layout;