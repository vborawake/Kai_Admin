const tabs = document.querySelector('.left_side.flex_row.space_between.center');
const popup = document.querySelector('.popup.flex_column');
const paitentPopup = document.querySelector('#patient_details');
const percentage = document.querySelector('#percentage');

function selectTab(e) {
    Array.from(e.currentTarget.children).forEach(tab => {
        tab.classList.remove('active');
    });

    e.target.classList.add('active');
    if (e.target.innerHTML === 'Clinicians') {
        document.querySelector('.appointments.flex_column.box h1').innerHTML = 'List Of All Registered Clinicians';
        document.querySelector('.appointments_header.flex_row.center.space_between button').style.display = 'block';
    }
    else {
        document.querySelector('.appointments.flex_column.box h1').innerHTML = 'List Of All Patients';
        document.querySelector('.appointments_header.flex_row.center.space_between button').style.display = 'none';
    }
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
    if (e.currentTarget.innerHTML === 'Set Commission % For Klinicians') {
        percentage.style.display = 'flex';
        percentage.style.top = `${ window.scrollY + 50 }px`;
        requestAnimationFrame(() => {
            percentage.style.transform = 'scale(1)';
        });
        return;
    }
    
    if (tabs.querySelector('.active').innerHTML === 'Clinicians') {
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
    if (percentage.style.display === 'flex') {
        requestAnimationFrame(() => {
            percentage.style.transform = 'scale(0)';
        });
        setTimeout(() => {
            percentage.style.display = 'none';
        }, 500);
        return;
    }
    
    if (tabs.querySelector('.active').innerHTML === 'Clinicians') {
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