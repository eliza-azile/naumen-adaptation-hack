const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

const usersPath = path.join(__dirname, 'data', 'users.json');

function readUsers() {
    const data = fs.readFileSync(usersPath, 'utf8');
    return JSON.parse(data).users;
}

app.post('/api/login', (req, res) => {
    const { login, password } = req.body;
    const users = readUsers();
    const user = users.find(u => u.login === login && u.password === password);

    if (user) {
        res.json({
            success: true,
            user: {
                id: user.id,
                login: user.login,
                role: user.role
            }
        });
    } else {
        res.json({
            success: false,
            message: 'Неверный логин или пароль'
        });
    }
});

app.get('/api/user/:id', (req, res) => {
    const users = readUsers();
    const user = users.find(u => u.id === parseInt(req.params.id));

    if (user) {
        res.json({
            id: user.id,
            login: user.login,
            role: user.role
        });
    } else {
        res.status(404).json({ error: 'Пользователь не найден' });
    }
});

app.post('/api/chat', (req, res) => {
    const { question, userId } = req.body;
    res.json({
        answer: 'Функция чат-бота в разработке. Скоро здесь появится ответ на ваш вопрос.'
    });
});

app.post('/api/mood', (req, res) => {
    const { userId, mood, isAnonymous, comment } = req.body;
    console.log(`Пользователь ${userId} оценил настроение: ${mood}, анонимно: ${isAnonymous}`);
    res.json({ success: true, message: 'Оценка сохранена' });
});

app.post('/api/feedback', (req, res) => {
    const { userId, text, isAnonymous } = req.body;
    console.log(`Обратная связь от пользователя ${userId}: ${text}`);
    res.json({ success: true, message: 'Обратная связь отправлена' });
});

app.post('/api/task', (req, res) => {
    const { userId, taskId, completed } = req.body;
    console.log(`Пользователь ${userId} отметил задачу ${taskId}: выполнено=${completed}`);
    res.json({ success: true });
});

app.get('/api/dashboard/hr', (req, res) => {
    res.json({
        stats: {
            avgMood: 3.8,
            completionRate: 75,
            totalFeedback: 12,
            positivePercent: 65,
            neutralPercent: 25,
            negativePercent: 10
        },
        recentFeedback: [
            { id: 1, text: 'Хороший первый день', anonymous: true },
            { id: 2, text: 'Непонятно с документами', anonymous: false }
        ],
        moodDistribution: {
            '1': 2,
            '2': 3,
            '3': 8,
            '4': 12,
            '5': 5
        }
    });
});

app.get('/api/employee/:id/progress', (req, res) => {
    res.json({
        daysPassed: 3,
        daysTotal: 90,
        tasksCompleted: 5,
        tasksTotal: 20,
        moodHistory: [
            { date: '2026-05-15', value: 4 },
            { date: '2026-05-16', value: 3 },
            { date: '2026-05-17', value: 5 }
        ]
    });
});

app.get('/api/events', (req, res) => {
    res.json([
        { id: 1, title: 'Знакомство с командой', date: '2026-05-20', hashtags: ['team', 'intro'] },
        { id: 2, title: 'Чай с HR', date: '2026-05-22', hashtags: ['hr', 'chat'] },
        { id: 3, title: 'Настолки в офисе', date: '2026-05-25', hashtags: ['games', 'office'] }
    ]);
});

app.listen(PORT, () => {
    console.log(`Бэкенд запущен на http://localhost:${PORT}`);
});
