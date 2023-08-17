const timetable = new Timetable();
const popup = document.querySelector('.popup.flex_column');

timetable.setScope(9, 21);
timetable.useTwelveHour();

const dates = [];
const date = new Date();
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

for (let i = 0; i < 31; i++) {
    dates.push(date.setDate(date.getDate() + i))
    date.setDate(date.getDate() - i);
} 

dates.forEach((date, i) => {
    const current = new Date(date);
    const day = current.getDate();
    const month = current.getMonth();
    const weekDay = days[current.getDay()];

    dates[i] = `${ day }\/${ month } ${ weekDay }`;
});

// console.log(dates);

function getDay(date) {
    let day = '';
    for (let char of date) {
        if (char === '/') break;
        day += char;
    }
    return day !== '' ? parseInt(day) : 0;
}

function getMonth(date) {
    let month = '';
    let dayDone = false;
    for (let char of date) {
        if (char === '/') dayDone = true;
        else if (dayDone === true && char !== ' ' && parseInt(char)) month += char;
    }
    return month !== '' ? parseInt(month) : 0;
    // console.log(month);
}

// console.log(dates[0]);
// getMonth(dates[0])

timetable.addLocations(dates);
timetable.addEvent('Chat - Video \n Patient ID: 121212', dates[0], new Date(2023, 5, getDay(dates[0]), 10, 45), new Date(2023, 5, getDay(dates[0]), 12, 30), {url: '#'});
timetable.addEvent('Chat - Video \n Patient ID: 121212', dates[0], new Date(2023, 5, getDay(dates[0]), 14, 0), new Date(2023, 5, getDay(dates[0]), 15, 0), {url: '#'});
timetable.addEvent('Chat - Video \n Patient ID: 121212', dates[1], new Date(2023, 5, getDay(dates[1]), 11, 30), new Date(2023, 5, getDay(dates[1]), 13, 0), {url: '#'});
timetable.addEvent('Chat - Video \n Patient ID: 121212', dates[1], new Date(2023, 5, getDay(dates[1]), 14, 30), new Date(2023, 5, getDay(dates[1]), 15, 30), {url: '#'});
timetable.addEvent('Chat - Video \n Patient ID: 121212', dates[2], new Date(2023, 5, getDay(dates[2]), 10, 45), new Date(2023, 5, getDay(dates[2]), 12, 30), {url: '#'});
timetable.addEvent('Chat - Video \n Patient ID: 121212', dates[3], new Date(2023, 5, getDay(dates[3]), 12, 30), new Date(2023, 5, getDay(dates[3]), 13, 45), {url: '#'});

console.log(new Date(2023, 5, 19, 10, 45));

const renderer = new Timetable.Renderer(timetable);
renderer.draw('.timetable');

function showSchedule(e) {
    popup.style.display = 'flex';
    popup.style.top = `${ window.scrollY + 50 }px`;
    requestAnimationFrame(() => {
        popup.style.transform = 'scale(1)';
    });
}

document.addEventListener('click', () => {
    if (notifications) {
        if (notifications.style.display === 'flex') notifications.style.display = 'none';
    }
    if (document.querySelector('.menu.flex_column').style.transform === 'scaleY(1)') document.querySelector('.menu.flex_column').style.transform = 'scaleY(0)';
});

function closeDetails(e) {
    requestAnimationFrame(() => {
        popup.style.transform = 'scale(0)';
    });
    setTimeout(() => {
        popup.style.display = 'none';
    }, 500);
}