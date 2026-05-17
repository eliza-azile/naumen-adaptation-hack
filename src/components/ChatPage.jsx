import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/25-naumen_orange.png';
import emoji from '../assets/red-panda-emoji.png';
import panda from '../assets/panda.png';
import styles from './ChatPage.module.css';


const BotReplies = {
    'привет': 'Привет, Я Панда ТапТапыч. Можешь спросить у меня о доступах, бенефитах, задачах или выгорании',
    'пароль': 'Я перенаправлю этот вопрос твоему руководителю.',
    'бенефит': 'Наши бенефиты: ДМС, оплата обедов, копоративный английский, абонемент в спортзал',
    'выгорание': 'Если чувствуешь усталось, поговори с руководителем или HR. Возьми паузу, выспись. Твоё здоровье самое важное!',
    'доступ': 'Доступы выдаются через заявку в IT-портале. Обычно это занимает всего лишь один день!',
    'мероприятие': 'Всё о мероприятиях ищи в соотествующем разделе. Там можно создать своё или присоединиться к уже существующему!',
    'задача': 'Твои задачи на сегодня: посмотри в разделе "Текущий прогресс". Не забывай отмечть выполненные!',
    'адаптация': 'Адаптация длится всего 3 месяца. Выполняй шаги в чек-листе, общайся с наставником и не стейсняйся задавать вопросы!',
    'спасибо': 'Всегда рад помочь. Обращайся!',
    'пока': 'Пока! Удачи в адаптации)'
};

const getTitle = () => {
    switch (location.pathname) {
        case '/chat': return 'ЧАТ С ПАНДОЙ';
        default: return '';
    }
};

function ChatPage() {
    const [messages, setMessages] = useState([
        {text: BotReplies['привет'], sender: 'bot'}
    ]);
    const [input, setInput] = useState('');

    const getBotReply = (userText) => {
        const lowerText = userText.toLowerCase();
        for (const[keyword, reply] of Object.entries(BotReplies)) {
            if (lowerText.includes(keyword)) {
                return reply;
            }
        }
        return 'Я пока не знаю ответ на этот вопрос. Лучше задай его наставнику или напиши в общий чат.';
    };

    const sendMessage = () => {
        if (!input.trim()) return;
        const userMsg = { text: input, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        const botReply = getBotReply(input);
        setTimeout(() => {
            setMessages(prev => [...prev, { text: botReply, sender: 'bot' }]);
        }, 500);
        setInput('');
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Link to='/profile' className={styles.logoLink}>
                    <img src={logo} alt="Логотип" className={styles.logoImage} />             
                </Link>
                <h1 className={styles.title}>
                    {getTitle()}
                    <img src={emoji} alt="панда" className={styles.emoji} />
                </h1>
            </header>
            <div className={styles.card}>
                <div className={styles.chatBox}>
                    {messages.map((msg, idx) => (
                        <div key={idx} className={msg.sender === 'user' ? styles.userMsg : styles.botMsg}>
                            {msg.text}
                        </div>
                    ))}
                </div>
                <div className={styles.inputWrapper}>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Напиши чем тебе помочь"
                        className={styles.input}
                        autoFocus                
                    />
                </div>
                <img src={panda} alt="панда" className={styles.pandaImage} />
            </div>
        </div>
    );
};

export default ChatPage;

