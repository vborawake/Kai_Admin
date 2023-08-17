const tabs = document.querySelector('.left_side.flex_row.space_between.center');
const popup = document.querySelector('.popup.flex_column');
const paitentPopup = document.querySelector('#patient_details');
const percentage = document.querySelector('#percentage');

function selectTab(e) {
    Array.from(e.currentTarget.children).forEach(tab => {
        tab.classList.remove('active');
    });

    e.target.classList.add('active');
    if (e.target.innerHTML === 'Athletes') document.querySelector('.appointments.flex_column.box h1').innerHTML = 'List Of All Athletes';
    else document.querySelector('.appointments.flex_column.box h1').innerHTML = 'List Of All Recruiters';
}

document.addEventListener('click', () => {
    if (notifications) {
        if (notifications.style.display === 'flex') notifications.style.display = 'none';
    }
    if (document.querySelector('.menu.flex_column').style.transform === 'scaleY(1)') document.querySelector('.menu.flex_column').style.transform = 'scaleY(0)';
});

function showPopup(e) {
    e.stopPropagation();
    if (e.target.classList.contains('profile_img') || e.target.classList.contains('username')) {
        if (e.currentTarget.nextElementSibling.style.transform === 'scaleY(0)' || e.currentTarget.nextElementSibling.style.transform === '') e.currentTarget.nextElementSibling.style.transform = 'scaleY(1)';
        else e.currentTarget.nextElementSibling.style.transform = 'scaleY(0)';
    }
}

function showDetails(e) {
    if (tabs.querySelector('.active').innerHTML === 'Athletes') {
        popup.style.display = 'flex';
        popup.style.top = `${ window.scrollY + 50 }px`;
        requestAnimationFrame(() => {
            popup.style.transform = 'scale(1)';
        });
    } else {
        paitentPopup.style.display = 'flex';
        paitentPopup.style.top = `${ window.scrollY + 50 }px`;
        requestAnimationFrame(() => {
            paitentPopup.style.transform = 'scale(1)';
        });
    }
}

function closeDetails(e) {
    if (tabs.querySelector('.active').innerHTML === 'Athletes') {
        requestAnimationFrame(() => {
            popup.style.transform = 'scale(0)';
        });
        setTimeout(() => {
            popup.style.display = 'none';
        }, 500);
    } else {
        requestAnimationFrame(() => {
            paitentPopup.style.transform = 'scale(0)';
        });
        setTimeout(() => {
            paitentPopup.style.display = 'none';
        }, 500);
    }
}