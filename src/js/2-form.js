const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
let formData = {
    email: '',
    message: '',
};
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
    try {
        formData = JSON.parse(savedData);
        form.email.value = formData.email || '';
        form.message.value = formData.message || '';
    } catch (err) { 
        console.log('Помилка при зчитуванні з localStorage:', err);
    }
} 
form.addEventListener('input', event => {
    const {name, value} = event.target;
    formData[name] = value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
    event.preventDefault();
    const {email, message} = formData;
    if (!email || !message) {
        alert('Fill please all fields');
        return;
    }
    console.log('Submitted:', formData);
    localStorage.removeItem(STORAGE_KEY);
    formData = {email: '', message: ''};
    form.reset();
});

// Оголоси поза будь-якими функціями обєкт formData з полями email та message, які спочатку мають порожні рядки як значення: { email: "", message: "" }.
// Використовуй метод делегування для відстеження змін у формі через подію input. 
// Зберігай актуальні дані з полів email та message у formData та записуй цей обєкт у локальне сховище. 
// Використовуй ключ "feedback-form-state" для зберігання даних у сховищі.
// При завантаженні сторінки перевір, чи є дані у локальному сховищі. Якщо так, використовуй їх для заповнення форми та об'єкта formData. 
// Якщо ні, залиш поля форми порожніми.
// Перед відправленням форми переконайся, що обидва поля форми заповнені. 
// Якщо будь-яке з полів (властивостей обєкта formData) порожнє, показуй сповіщення з текстом «Fill please all fields».
//  Якщо всі поля заповнені, виведи у консоль обєкт formData з актуальними значеннями, очисти локальне сховище, обєкт formData і поля форми.


// На живій сторінці відображається форма з двома елементами форми і кнопкою типу submit
// Форма стилізована згідно з макетом
// На формі прослуховуються події input і submit
// При введенні даних у будь-який елемент форми вони записуються у локальне сховище під ключем "feedback-form-state", збережені дані не містять пробіли по краях
// Введення даних в одне поле форми не видаляє дані в сховищі для іншого
// При оновленні сторінки дані з локального сховища підставляються в елементи форми, у полях форми відсутні undefined
// При сабміті форми є перевірка, щоб обидва елементи форми були заповнені
// Під час сабміту форми, якщо обидва елементи форми заповнені, виводиться у консоль об'єкт з полями email, message та їхніми поточними значеннями,
//  а також очищаються сховище і поля форми
// Якщо після сабміту форми ввести в будь-який елемент форми дані, то в локальному сховищі не зявляються дані від попереднього сабміта

