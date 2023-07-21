const day = document.getElementById('day');
const day2 = document.getElementById('day2');
const day3 = document.getElementById('day3');
const result = document.querySelector('#result');
const result2 = document.querySelector('#result2');
const result3 = document.querySelector('#result3');
const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');
const form3 = document.getElementById('form3');

const point = document.getElementById('point');
const point2 = document.getElementById('point2');
const point3 = document.getElementById('point3');
const result4 = document.querySelector('#result4');
const result5 = document.querySelector('#result5');
const result6 = document.querySelector('#result6');
const form4 = document.getElementById('form4');
const form5 = document.getElementById('form5');
const form6 = document.getElementById('form6');

form1.addEventListener('submit', e => {
    e.preventDefault();
    if (day.value === "1") {
        result.textContent = "Monday";
    } else if (day.value === "2") {
        result.textContent = "Tuesday";
    } else if (day.value === "3") {
        result.textContent = "Wednesday";
    } else if (day.value === "4") {
        result.textContent = "Thursday";
    } else if (day.value === "5") {
        result.textContent = "Friday";
    } else if (day.value === "6") {
        result.textContent = "Saturday";
    } else if (day.value === "7") {
        result.textContent = "Sunday";
    } else {
        result.style.color = "red";
        result.textContent = "There is not a valid value!"
    }
});

form2.addEventListener('submit', e => {
    e.preventDefault();
    switch (day2.value) {
        case "1":
            result2.textContent = "Monday";
            break;
        case "2":
            result2.textContent = "Tuesday";
            break;
        case "3":
            result2.textContent = "Wednesday";
            console.log(result2.textContent)
            break;
        case "4":
            result2.textContent = "Thursday";
            break;
        case "5":
            result2.textContent = "Friday";
            break;
        case "6":
            result2.textContent = "Saturday";
            break;
        case "7":
            result2.textContent = "Sunday";
            break;
        default:
            result2.style.color = "red";
            result2.textContent = "This is not a valid value!";
            break;

    }
});

form3.addEventListener('submit', e => {
    e.preventDefault();
    //if ((Number(day3.value) < 1 || Number(day3.value) > 7)) result3.style.color = "red";
    day3.value === "1" ? result3.textContent = "Monday" :
        day3.value === "2" ? result3.textContent = "Tuesday" :
            day3.value === "3" ? result3.textContent = "Wednesday" :
                day3.value === "4" ? result3.textContent = "Thursday" :
                    day3.value === "5" ? result3.textContent = "Friday" :
                        day3.value === "6" ? result3.textContent = "Saturday" :
                            day3.value === "7" ? result3.textContent = "Sunday" :
                                result3.textContent = "There is not a valid value!";
});

//POINT CALCULATE
form4.addEventListener('submit', e => {
    e.preventDefault();
    if (Number(point.value) < 45) {
        result4.textContent = "Failed!";
    } else if (Number(point.value) < 55) {
        result4.textContent = "Passed!";
    } else if (Number(point.value) < 70) {
        result4.textContent = "Middle";
    } else if (Number(point.value) < 85) {
        result4.textContent = "Good";
    } else if (Number(point.value) <= 100) {
        result4.textContent = "Success";
    } else {
        result4.style.color = "red";
        result4.textContent = "There is not a valid value!"
    }
});
