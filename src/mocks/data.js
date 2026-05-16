import { Milestone } from "lucide-react";

export const currentUser = {
    id: 1,
    name: 'Панда ТапТапыч',
    photo: '\src\assets\red-panda-emoji.png',
    grade: 'Стажер',
    city: 'Екатеринбург',
    interests: ['Бисероплетение', 'Скейтбординг', 'Скроллинг'],
    statuses: { showInterests: true, interesMero: false, readyToCommunicate: true }
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
            photo: 'src\assets\red-panda-emoji.png',
            grade: 'Стажер',
            city: 'Екатеринбург',
            interests: ['Бисероплетение', 'Скейтбординг', 'Скроллинг'],
            statuses: { showInterests: true, interesMero: false, readyToCommunicate: true }
        },
        {
            id: 2,
            name: 'Бадди',
            photo: 'src\assets\baddy.png',
            grade: 'Стажер',
            city: 'Екатеринбург',
            interests: ['Сквошинг', 'Скейтбординг', 'Скроллинг'],
            statuses: { showInterests: false, interesMero: false, readyToCommunicate: true }
        },
        {
            id: 3,
            name: 'ЛЕГЕНДА',
            photo: 'src\assets\LEGEND.png',
            grade: 'Стажер',
            city: 'Екатеринбург',
            interests: ['Сквошинг', 'Скейтбординг', 'Скроллинг'],
            statuses: { showInterests: false, interesMero: false, readyToCommunicate: true }
        },
        {
            id: 4,
            name: 'ТАРАСОВА О. А.',
            photo: 'src\assets\TARASOVA.png',
            grade: 'Стажер',
            city: 'Новосибирск',
            interests: ['Роллики', 'Скалолазание'],
            statuses: { showInterests: false, interesMero: false, readyToCommunicate: false }
        },
        {
            id: 5,
            name: 'КАЗИКОВ Н. Н.',
            photo: 'src\assets\KAZIKOV.png',
            grade: 'Стажер',
            city: 'Казань',
            interests: ['Конструирование'],
            statuses: { showInterests: true, interesMero: false, readyToCommunicate: false }
        },

];

export const hrMetrics = [];
export const ganttData = [];