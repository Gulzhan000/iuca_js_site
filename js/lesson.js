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

//TAB
const tabsContentCards = document.querySelectorAll('.tab_content_block');
const tabsItems = document.querySelectorAll('.tab_content_item');
const tabsItemsParents = document.querySelector('.tab_content_table table'); 

let currentIndex = 0; 
let intervalId;

const hideTabsContentCards = () => {
    tabsContentCards.forEach((card) => {
        card.style.display = 'none';
    });
    tabsItems.forEach((item) => {
        item.classList.remove('tab_content_item_active');
    });
};

const showTabsContentCards = (index = 0) => {
    tabsContentCards[index].style.display = 'block';
    tabsItems[index].classList.add('tab_content_item_active');
};
const startAutoSlider = () => {
    intervalId = setInterval(() => {
        hideTabsContentCards();
        currentIndex = (currentIndex + 1) % tabsItems.length;
        showTabsContentCards(currentIndex);
    }, 2000);
};


tabsItemsParents.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        clearInterval(intervalId);
        tabsItems.forEach((tabItem, tabItemIndex) => {
            if (event.target === tabItem) {
                hideTabsContentCards();
                showTabsContentCards(tabItemIndex);
                currentIndex = tabItemIndex;
                startAutoSlider();
            }
        });
    }
};
hideTabsContentCards();
showTabsContentCards(currentIndex);
startAutoSlider();


