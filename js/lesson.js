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
// TAB
const tabsContentCards = document.querySelectorAll('.tab_content_block');
const tabsItems = document.querySelectorAll('.tab_content_item');
const tabsItemsParents = document.querySelector('.tab_content_table table'); 

let currentCardIndex = 0;
let tabIntervalId;

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

const startTabAutoSlider = () => {
    tabIntervalId = setInterval(() => {
        hideTabsContentCards();
        currentCardIndex = (currentCardIndex + 1) % tabsItems.length;
        showTabsContentCards(currentCardIndex);
    }, 2000);
};

tabsItemsParents.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        clearInterval(tabIntervalId);
        tabsItems.forEach((tabItem, tabItemIndex) => {
            if (event.target === tabItem) {
                hideTabsContentCards();
                showTabsContentCards(tabItemIndex);
                currentCardIndex = tabItemIndex;
                startTabAutoSlider();
            }
        });
    }
};

hideTabsContentCards();
showTabsContentCards(currentCardIndex);
startTabAutoSlider();


// Получаем input элементы
const somInput = document.querySelector('#som');
const usdInput = document.querySelector('#usd');
const eurInput = document.querySelector('#eur');

const converter = (element, target1, target2, currentType) => {
    element.addEventListener('input', async () => {
        try {
            const response = await fetch('../data/converter.json');
            if (!response.ok) throw new Error('Не удалось загрузить данные');

            const data = await response.json();
            const value = parseFloat(element.value);

            if (!element.value || isNaN(value)) {
                target1.value = '';
                target2.value = '';
                return;
            }

            switch(currentType) {
                case 'som':
                    target1.value = (value / data.usd).toFixed(2);
                    target2.value = (value / data.eur).toFixed(2);
                    break;
                case 'usd':
                    target1.value = (value * data.usd).toFixed(2);
                    target2.value = ((value * data.usd) / data.eur).toFixed(2);
                    break;
                case 'eur':
                    target1.value = (value * data.eur).toFixed(2);
                    target2.value = ((value * data.eur) / data.usd).toFixed(2);
                    break;
            }
        } catch (error) {
            console.error(error);
        }
    });
};

converter(somInput, usdInput, eurInput, 'som');
converter(usdInput, somInput, eurInput, 'usd');
converter(eurInput, somInput, usdInput, 'eur');



//Card Swicher
const cardImages = document.querySelectorAll('.card-image');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

let currentImageIndex = 0;
const totalImages = cardImages.length;

function showImage(index) {
    cardImages.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    showImage(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    showImage(currentImageIndex);
}

btnNext.addEventListener('click', () => {
    nextImage();
    resetAutoSlide();
});

btnPrev.addEventListener('click', () => {
    prevImage();
    resetAutoSlide();
});

let autoSlide = setInterval(nextImage, 3000);

function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextImage, 3000);
}

showImage(currentImageIndex);





const apiKey = "12385e170cae56b8fb84643c9511e7de"; 
const input = document.querySelector(".cityName");
const button = document.querySelector(".searchBtn");
const citySpan = document.querySelector(".city");
const tempSpan = document.querySelector(".temp");

// обработка Enter
input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        searchWeather();
    }
});

// обработка кнопки
button.addEventListener("click", searchWeather);

function searchWeather() {
    const city = input.value.trim();
    if (city) {
        getWeather(city);
    }
}

async function getWeather(city) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`
        );
        if (!response.ok) {
            throw new Error("Город не найден");
        }
        const data = await response.json();

        citySpan.textContent = data.name;
        tempSpan.textContent = `${Math.round(data.main.temp)}°C`;
    } catch (error) {
        citySpan.textContent = "Ошибка";
        tempSpan.textContent = error.message;
    }
}



