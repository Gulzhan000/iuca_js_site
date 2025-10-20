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

// Пример: +7 912 345-67-89
const reqExpR = /^\+7 9\d{2} \d{3}-\d{2}-\d{2}$/;

phoneButtonR.addEventListener('click', () => {
    if (reqExpR.test(phoneInputR.value)) {
        phoneSpanR.innerHTML = 'Этот номер существует';
        phoneSpanR.style.color = 'green';
    } else {
        phoneSpanR.innerHTML = 'Этот номер не существует';
        phoneSpanR.style.color = 'red';
    }
});
