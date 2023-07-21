new Swiper('.swiper',{
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});

function getCount(el){
    var count = el.value.length;
    var answer = document.getElementById("answer1");
    answer.innerHTML = "Количество символов:" + count;
}

function getTextInfo(el){
    var reg = /\n/g;

    var signCount = el.value.replace(reg, '').length;
    var wordCount = el.value.replace(reg, ' ').split(' ').length;
    var textCount = el.value.split('\n').length;

    var answer1 = document.getElementById("signCountTask2");
    var answer2 = document.getElementById("wordCountTask2");
    var answer3 = document.getElementById("textCountTask2");
    
    answer1.innerHTML = "Количество символов:" + signCount;
    answer2.innerHTML = "Количество слов: " + wordCount;
    answer3.innerHTML = "Количество строк: " + textCount;
}

var maxLenght = 10;

function validInput(el, textarea){
    var textItem = document.getElementById(textarea);

    var checkValue =  el.value.length - maxLenght;

    if(checkValue < 0){
        textItem.innerHTML = "Отсталось символов: " + Math.abs(checkValue);
        textItem.style.color = 'black';
    } else if(checkValue > 0){
        textItem.innerHTML = "&#10006 Превышено символов: " + checkValue;
        textItem.style.color = 'red';
    } else {
        textItem.innerHTML = "";
    }
}

var lastWordCount = 0;

function validInputWithRestriction(el){
    var checkBox = document.getElementById("banExceeding");

    if(!checkBox.checked){
        validInput(el,"answer4");

        lastWordCount = el.value.length;
    } else if(checkBox.checked){
        if(el.value.length <= maxLenght){
            validInput(el,"answer4");
        } else if(el.value.length > maxLenght){
            if(el.value.length < lastWordCount){
                validInput(el,"answer4");
            } else{
                el.value = el.value.slice(0,-1);
            }
        }

        lastWordCount = el.value.length;
    }
}

const year = document.getElementById('year');
const month = document.getElementById('month');
const day = document.getElementById('day');

const dateNowItem = document.getElementById('dateNow');

const today = new Date();

var months = new Array('января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря')

dateNow.innerHTML = '<b>Сегодня:</b> ' + today.getDate() +' '+ months[today.getMonth()] + ' ' + today.getFullYear() + 'года';

for(let date = today.getFullYear(); date >= 1900; date--){
    const option = document.createElement('option');
    option.value = date;
    option.text = date + 'г.';

    year.append(option);
}

for(let monthNum = 1; monthNum <= 12; monthNum++){
    monthName = getMonthByNumber(monthNum);

    const option = document.createElement('option');
    option.value = monthNum;
    option.text = monthName;

    month.append(option);
}

addDays(1);

function getMonthByNumber(num){
    const date = new Date();
    date.setMonth(num-1);

    return monthName = date.toLocaleString('ru-ru',{
        month: 'long',
    });
}

function getDaysInMonth(monthNum){
    return new Date(0,monthNum,0).getDate();
}

function addDays(monthNum){
    for (let days = 1; days <= getDaysInMonth(monthNum); days++) {
    const option = document.createElement('option');
    option.value = days;
    option.text = days;

    day.append(option);
    }
}

function dropDays(){
    var length = day.options.length;

    var length = day.options.length;
    for (i = length-1; i >= 0; i--) {
        day.options[i] = null;
    }
}

month.onchange = function(){
    let index = month.selectedIndex;
    let option = month.options; 
    let value = option[index].value;

    let dayIndex = day.selectedIndex;

    dropDays();
    addDays(value);

    if(dayIndex <= getDaysInMonth(value)){
        day.selectedIndex = dayIndex;
    }
    
    getResultDate();
}

day.onchange = function(){
    getResultDate();
}

year.onchange = function(){
    getResultDate();
}

function getResultDate(){
    let indexYear = year.selectedIndex;
    let optionYear = year.options; 
    let valueYear = optionYear[indexYear].value;

    let indexDay = day.selectedIndex;
    let optionDay = day.options; 
    let valueDay = optionDay[indexDay].value;

    let indexMonth = month.selectedIndex;
    let optionMonth = month.options; 
    let valueMonth = optionMonth[indexMonth].value;

    var dayDiff = today.getDate() - valueDay;
    var monthDiff = today.getMonth() - valueMonth + 1;
    var yearDiff = today.getFullYear() - valueYear;
    var date = new Date(valueYear, valueMonth, valueDay);

    var dateDiff = 'Событие произошло <b>' + Math.abs(dayDiff) + ' дней ' + Math.abs(monthDiff) + ' месяц(ев/а) ' + Math.abs(yearDiff) + ' лет </b>назад';
    
    if(date - today > 0){
        dateDiff = 'Событие произойдёт через <b>' + Math.abs(dayDiff) + ' дней ' + Math.abs(monthDiff)  + ' месяц(ев/а) ' + Math.abs(yearDiff) + ' лет </b>';
    }

    var resultItem = document.getElementById('resultDate').innerHTML = dateDiff;
}

var rectangle = document.getElementById('rectangle');
var activeRectangle = false;

rectangle.addEventListener('click', function(){
    if(activeRectangle){
        activeRectangle = false;

        rectangle.style.border = '2px grey solid';
        rectangle.style.borderRadius = '0px';
    } else{
        activeRectangle = true;

        rectangle.style.border = '5px black solid';
        rectangle.style.borderRadius = '4px';
    }
});

document.addEventListener('keydown', function(event){
    let height = rectangle.offsetHeight;
    let width = rectangle.offsetWidth;

    event.preventDefault();
    
    if(activeRectangle){
        switch(event.code){
            case 'ArrowUp':
                rectangle.style.height = height + "px";
                break;
            case 'ArrowDown':
                rectangle.style.height = height - 20+ "px";
                break;
            case 'ArrowLeft':
                rectangle.style.width = width -20 + "px";
                break;
            case 'ArrowRight':
                rectangle.style.width = width  + "px";
                break;
            case 'Digit1':
                rectangle.style.backgroundColor = '#e74949';
                break;
            case 'Digit2':
                rectangle.style.backgroundColor = '#50cb45';
                break;
            case 'Digit3':
                rectangle.style.backgroundColor = '#e19743';
                break;
            case 'Digit4':
                rectangle.style.backgroundColor = '#eb82f7';
                break;
            case 'Digit5':
                rectangle.style.backgroundColor = '#f2f044';
                break;
            case 'Digit6':
                rectangle.style.backgroundColor = '#6c6af2';
                break;
            case 'Digit7':
                rectangle.style.backgroundColor = '#ffb5e5';
                break;
            case 'Digit8':
                rectangle.style.backgroundColor = '#cbffb5';
                break;
            case 'Digit9':
                rectangle.style.backgroundColor = '#83f4c9';
                break;
            case 'Digit0':
                rectangle.style.backgroundColor = '#ffffff';
                break;
        }
    }
});

