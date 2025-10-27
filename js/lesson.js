//проверка номера
const phoneInput = document.querySelector('#phone_input');
const phoneButton = document.querySelector('#phone_button');
const phoneSpan = document.querySelector('#phone_result');

//+996550644772
const reqExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.addEventListener('click', ()=>{
    if (reqExp.test(phoneInput.value)){
        phoneSpan.innerHTML = 'Этот номер существует';
        phoneSpan.style.color = 'green';
    }else {
        phoneSpan.innerHTML = 'Этот номер не существует';
        phoneSpan.style.color = 'red';
    }
})


//проверка российского номера
const phoneInputR = document.querySelector('#phoneR_input');
const phoneButtonR = document.querySelector('#phoneR_button');
const phoneSpanR = document.querySelector('#phoneR_result');


const reqExpR = /^\+7 \d{3} \d{3}-\d{2}-\d{2}$/;

phoneButtonR.addEventListener('click', () => {
    if (reqExpR.test(phoneInputR.value)) {
        phoneSpanR.innerHTML = 'Этот номер существует';
        phoneSpanR.style.color = 'green';
    } else {
        phoneSpanR.innerHTML = 'Этот номер не существует';
        phoneSpanR.style.color = 'red';
    }
});


const tabsContentCards = document.querySelectorAll('.tab_content_block');
const tabsItems = document.querySelectorAll('.tab_content_item');
const tabsItemsParents = document.querySelector('.tab_content_table table'); // исправлено

const hightTabsContentCards = () => {
    tabsContentCards.forEach((tabsContentCard) => {
        tabsContentCard.style.display = 'none';
    });
    tabsItems.forEach((tabItem) => {
        tabItem.classList.remove('tab_content_item_active');
    });
};

const showTabsContentCards = (indexElement = 0) => {
    tabsContentCards[indexElement].style.display = 'block';
    tabsItems[indexElement].classList.add('tab_content_item_active');
};

hightTabsContentCards();
showTabsContentCards();

tabsItemsParents.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        clearInterval(intervalId);
        tabsItems.forEach((tabItem, tabItemIndex) => {
            if (event.target === tabItem) {
                hightTabsContentCards();
                showTabsContentCards(tabItemIndex);
                curretIndex = tabItemIndex;
                startAuthoSlider();
            }
        });
    }
};

let curretIndex = 0; // Первая вкладка
let intervalId; // Переменная для хранения интервала

// Ф-ция для автоматического переключения
const startAuthoSlider = () => {
    intervalId = setInterval(() => {
        hightTabsContentCards();
        showTabsContentCards(curretIndex);
        curretIndex = (curretIndex + 1) % tabsItems.length;
    }, 2000); // 2сек
};

// Запуск автослайдера
startAuthoSlider();
