import './styles/style.css';

const alcohol = [
    {
        name: 'Пиво',
        image: 'https://www.flaticon.com/svg/static/icons/svg/3617/3617163.svg'
    },
    {
        name: 'Водка',
        image: 'https://www.flaticon.com/svg/static/icons/svg/920/920522.svg',
    },
    {
        name: 'Красное вино',
        image: 'https://www.flaticon.com/svg/static/icons/svg/1200/1200973.svg'
    },
    {
        name: 'Ром',
        image: 'https://www.flaticon.com/svg/static/icons/svg/2851/2851803.svg'
    },
    {
        name: 'Виски',
        image: 'https://www.flaticon.com/svg/static/icons/svg/922/922526.svg'
    },
    {
        name: 'Маргарита',
        image: 'https://www.flaticon.com/svg/static/icons/svg/620/620129.svg'
    },
    {
        name: 'Маргарита',
        image: 'https://www.flaticon.com/svg/static/icons/svg/620/620129.svg'
    },
    {
        name: 'Маленький молочный коктейль из макдака + 50 коньяка',
        image: 'https://www.flaticon.com/svg/static/icons/svg/229/229368.svg'
    },
    {
        name: 'Джин',
        image: 'https://www.flaticon.com/svg/static/icons/svg/1485/1485860.svg'
    },
    {
        name: 'Ягер',
        image: 'https://www.flaticon.com/svg/static/icons/svg/2054/2054344.svg'
    },
    {
        name: 'Сангрия, не ленимся и готовим сами за 5 минут',
        image: 'https://www.flaticon.com/svg/static/icons/svg/3329/3329274.svg'
    },
    {
        name: 'Текила',
        image: 'https://www.flaticon.com/svg/static/icons/svg/1598/1598090.svg'
    },
    {
        name: 'Шампанское и закусить бутиком с икрой',
        image: 'https://www.flaticon.com/svg/static/icons/svg/1425/1425518.svg'
    },
    {
        name: 'Белое вино',
        image: 'https://www.flaticon.com/svg/static/icons/svg/1868/1868793.svg'
    },
    {
        name: 'Коньяк',
        image: 'https://www.flaticon.com/svg/static/icons/svg/2722/2722453.svg'
    },
    {
        name: 'Выпей водички',
        image: 'https://www.flaticon.com/svg/static/icons/svg/946/946618.svg'
    },
    {
        name: 'Кузнечик! 50 мятного ликера, 50 калуа, 50 сливок',
        image: 'https://www.flaticon.com/svg/static/icons/svg/789/789398.svg'
    },
    {
        name: 'Не надо',
        image: 'https://www.flaticon.com/svg/static/icons/svg/3468/3468313.svg'
    },
    {
        name: 'Мартини, и не забудь про оливки',
        image: 'https://www.flaticon.com/svg/static/icons/svg/920/920538.svg'
    }
]

const text = document.querySelector('.main__randomizer-liquor');
const image = document.querySelector('.main__randomizer-image');
const button = document.querySelector('.main__button');

function setValues() {
    const random = alcohol[Math.floor(Math.random() * alcohol.length)];
    const randomName = random.name;
    const randomImage = random.image;
    text.textContent = randomName;
    image.src = randomImage;
}

setValues();

button.addEventListener('click', (e) => {
    e.preventDefault();
    setValues();
})