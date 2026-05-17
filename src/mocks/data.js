import { Milestone } from "lucide-react";
import redPandaImg from '../assets/red-panda-emoji.png';
import baddyImg from '../assets/baddy.png';
import legendImg from '../assets/LEGEND.png';
import tarasovaImg from '../assets/TARASOVA.png';
import kazikovImg from '../assets/KAZIKOV.png';

export const currentUser = {
    id: 1,
    name: 'Панда ТапТапыч',
    photo: redPandaImg,
    specialization: 'Фронтендер',
    city: 'Екатеринбург',
    grade: 'Стажер',
    period: '21.04.2026 - 22.07.2026',
    director: 'Замбаева А. А.',
    hrbr: 'Криворотов С. П.',
    achievments: ['Родился (15.05.2012)', 'Отучился на вайбкодинг(29.05.2024)', 'Попал на стажировку (21.04.2026)'],
    interests: ['Бисероплетение', 'Скейтбординг', 'Скроллинг'],
    team: 'Supermans',
    statuses: { showInterests: true, eventsInterests: false, readyToCommunicate: true }
};

export const steps = [
    {id: 1, title: 'Получить доступ к рабочей почте', done: true, Milestone: 'Доступы и знакомство', day: 1},
    {id: 2, title: 'Запросить доступ к репозиториям GitHub', done: true, Milestone: 'Доступы и знакомство', day: 1},
    {id: 3, title: 'Установить IDE и плагины по списку', done: true, Milestone: 'Доступы и знакомство', day: 2},
    {id: 4, title: 'Найти и скачать все пароли/документы в корпоративной вики', done: true, Milestone: 'Доступы и знакомство', day: 2},
    {id: 5, title: 'Познакомиться с наставником', done: true, Milestone: 'Доступы и знакомство', day: 2},
    {id: 6, title: 'Добавиться в командные чаты', done: true, Milestone: 'Доступы и знакомство', day: 2}, 
    {id: 7, title: 'Посмотреть вводные видео', done: false, Milestone: 'Обучение и процессы', day: 3}, 
    {id: 8, title: 'Прочитать инструкцию', done: false, Milestone: 'Обучение и процессы', day: 3}, 
    {id: 9, title: 'Запустить локально проект', done: false, Milestone: 'Обучение и процессы', day: 4}, 
    {id: 10, title: 'Проверить, что умеешь создавать ветку и делать PR', done: false, Milestone: 'Обучение и процессы', day: 4}, 
    {id: 11, title: 'Пройти короткий тест по принятым в команде стандартам кода', done: false, Milestone: 'Обучение и процессы', day: 5},
    {id: 12, title: 'Познакомиться с аналитиком', done: false, Milestone: 'Обучение и процессы', day: 5},
    {id: 13, title: 'Познакомиться с тимлидом', done: false, Milestone: 'Обучение и процессы', day: 5},   
]

export const events = [
    {title: 'Панкейк-пати',format:'Приготовление панкейков',hashtags: ['#еда'], needBudget: true, where: 'офис'},
    {title: 'Чайная церемония',format: 'посиделки в переговорке', hashtags: ['чай'], needBudget: true,where: 'офис/кафе'},
    {title: 'День кошек в офисе',format: 'выставка кошек',hashtags: ['#кошки'], needBudget: false, where: 'офис'},
];

export const interestHashtags = [
    '#Панкейк-пати',
    '#Пикник',
    '#Настолки'
]

export const people = [
        {
            id: 1,
            name: 'Панда ТапТапыч',
            photo: redPandaImg,
            specialization: 'Бэкендер',
            grade: 'Стажер',
            city: 'Екатеринбург',
            period: '21.04.2026 - 22.07.2026',
            interests: ['Бисероплетение', 'Скейтбординг', 'Скроллинг'],
            team: 'Supermans',
            statuses: { showInterests: true, interesMero: false, readyToCommunicate: true }
        },
        {
            id: 2,
            name: 'Бадди',
            photo: baddyImg,
            specialization: 'Аналитик',
            grade: 'Стажер',
            city: 'Екатеринбург',
            period: '21.04.2026 - 22.07.2026',
            interests: ['Сквошинг', 'Скейтбординг', 'Скроллинг'],
            team: 'Supermans',
            statuses: { showInterests: false, interesMero: false, readyToCommunicate: true }
        },
        {
            id: 3,
            name: 'ЛЕГЕНДА',
            photo: legendImg,
            specialization: 'Фронтендер',
            grade: 'Стажер',
            city: 'Екатеринбург',
            period: '21.04.2026 - 22.07.2026',
            interests: ['Сквошинг', 'Скейтбординг', 'Скроллинг'],
            team: 'Supermans',
            statuses: { showInterests: false, interesMero: false, readyToCommunicate: true }
        },
        {
            id: 4,
            name: 'ТАРАСОВА О. А.',
            photo: tarasovaImg,
            specialization: 'Бэкендер',
            grade: 'Стажер',
            city: 'Новосибирск',
            period: '21.04.2026 - 22.07.2026',
            interests: ['Роллики', 'Скалолазание'],
            team: 'Supermans',
            statuses: { showInterests: false, interesMero: false, readyToCommunicate: false }
        },
        {
            id: 5,
            name: 'КАЗИКОВ Н. Н.',
            photo: kazikovImg,
            specialization: 'Фронтендер',
            grade: 'Стажер',
            city: 'Казань',
            period: '21.04.2026 - 22.07.2026',
            interests: ['Конструирование'],
            team: 'Supermans',
            statuses: { showInterests: true, interesMero: false, readyToCommunicate: false }
        },

];

export const hrEmotionalState = {
  good: 70,
  neutral: 20,
  bad: 10,
};

export const hrBurnout = {
  value: 20,
  trend: +5,
};

export const hrFeedback = {
  positive: 12,
  neutral: 24,
  negative: 4,
};

export const hrRequests = [
  { name: 'ЛЕГЕНДА', text: 'Я не понимаю, как мне установить “МАКС” на макбук 😭🙏', status: 'new', avatar: '/src/assets/LEGEND.png' },
  { name: 'ТАРАСОВА О. А.', text: 'Мне не нравятся шутки тимлида на тему моих луков', status: 'completed', avatar: '/src/assets/TARASOVA.png' },
  { name: 'КАЗИКОВ Н. Н.', text: 'Как сбросить пароль? Желательно везде.', status: 'completed', avatar: '/src/assets/KAZIKOV.png' },
];

export const hrPopularSections = [
  { name: 'Знакомства', averageTime: '20 мин' },
  { name: 'Текущий прогресс', averageTime: '1 час' },
  { name: 'Мероприятия', averageTime: '30 мин' },
  { name: 'Моя карточка', averageTime: '10 мин' },
];

export const ganttData = [
  {
    name: 'ЛЕГЕНДА',
    days: ['completed', 'completed', 'completed', 'completed', 'completed', 'completed', 'future', 'future', 'future', 'future', 'future', 'future'],
    risk: false,
  },
  {
    name: 'ТАРАСОВА О. А,',
    days: ['completed', 'completed', 'none', 'partial', 'completed', 'completed', 'future', 'future', 'future', 'future', 'future', 'future'],
    risk: false,
    problem: '',
  },
  {
    name: 'КАЗИКОВ Н. Н.',
    days: ['completed', 'partial', 'completed', 'completed', 'none', 'none', 'future', 'future', 'future', 'future', 'future', 'future'],
    risk: true,
    problem: 'Застрял на шаге “Короткий тест по стандартам кода”',
  }
];





