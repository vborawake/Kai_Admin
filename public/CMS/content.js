const defaultSection = document.querySelector('.content.flex_column');
const splashScreen = document.querySelector('.splash_screen.flex_column');
const introductionScreen = document.querySelector('.introduction_screen.flex_column');
const termsConditions = document.querySelector('.terms_conditions.flex_column');
const categoryScreen = document.querySelector('.category');

function showEditScreen(e, which) {
    console.log('Triggered');
    
    if (which === 'header') {
        if (e.currentTarget.querySelector('p').innerHTML === 'Back &lt; Edit Category') {
            categoryScreen.style.display = 'block';
            splashScreen.style.display = 'none';
            introductionScreen.style.display = 'none';
            termsConditions.style.display = 'none';
            defaultSection.style.display = 'none';
            categoryScreen.querySelector('.screen_1.width_full').style.display = 'block';
            categoryScreen.querySelector('.screen_2.width_full').style.display = 'none';
            categoryScreen.querySelector('.screen_3.width_full').style.display = 'none';
            document.querySelector('.header.flex_row.space_between p').innerHTML = 'Back &lt; Category';
            return;
        }
        splashScreen.style.display = 'none';
        introductionScreen.style.display = 'none';
        termsConditions.style.display = 'none';
        defaultSection.style.display = 'flex';
        categoryScreen.style.display = 'none';
        e.currentTarget.querySelector('p').innerHTML = 'Content Management System';
        e.currentTarget.querySelector('button').style.display = 'none';
    } else if (which === 'splash') {
        splashScreen.style.display = 'flex';
        introductionScreen.style.display = 'none';
        termsConditions.style.display = 'none';
        defaultSection.style.display = 'none';
        categoryScreen.style.display = 'none';
        // Change the heading value
        e.currentTarget.parentElement.parentElement.parentElement.previousElementSibling.querySelector('p').innerHTML = 'Back &lt; Edit Splash Screen';
        e.currentTarget.parentElement.parentElement.parentElement.previousElementSibling.querySelector('button').style.display = 'none';
    } else if (which === 'terms') {
        splashScreen.style.display = 'none';
        introductionScreen.style.display = 'none';
        termsConditions.style.display = 'flex';
        defaultSection.style.display = 'none';
        categoryScreen.style.display = 'none';
        // Change the heading value
        e.currentTarget.parentElement.parentElement.parentElement.previousElementSibling.querySelector('p').innerHTML = 'Back &lt; Edit Terms & Conditions';
        e.currentTarget.parentElement.parentElement.parentElement.previousElementSibling.querySelector('button').style.display = 'none';
    } else if (which === 'category') {
        categoryScreen.style.display = 'block';
        splashScreen.style.display = 'none';
        introductionScreen.style.display = 'none';
        termsConditions.style.display = 'none';
        defaultSection.style.display = 'none';
        categoryScreen.querySelector('.screen_1.width_full').style.display = 'block';
        categoryScreen.querySelector('.screen_2.width_full').style.display = 'none';
        categoryScreen.querySelector('.screen_3.width_full').style.display = 'none';
        e.currentTarget.parentElement.parentElement.parentElement.previousElementSibling.querySelector('p').innerHTML = 'Back &lt; Category';
        e.currentTarget.parentElement.parentElement.parentElement.previousElementSibling.querySelector('button').style.display = 'block';
    } else if (which === 'training') {
        categoryScreen.querySelector('.screen_1.width_full').style.display = 'none';
        categoryScreen.querySelector('.screen_2.width_full').style.display = 'block';
        categoryScreen.querySelector('.screen_3.width_full').style.display = 'none';
        document.querySelector('.header.flex_row.space_between p').innerHTML = 'Back &lt; Edit Category';
    } else if (which === 'clinic') {
        categoryScreen.querySelector('.screen_1.width_full').style.display = 'none';
        categoryScreen.querySelector('.screen_2.width_full').style.display = 'none';
        categoryScreen.querySelector('.screen_3.width_full').style.display = 'block';
        document.querySelector('.header.flex_row.space_between p').innerHTML = 'Back &lt; Edit Category';
    } else {
        splashScreen.style.display = 'none';
        introductionScreen.style.display = 'flex';
        termsConditions.style.display = 'none';
        defaultSection.style.display = 'none';
        categoryScreen.style.display = 'none';
        // Change the heading value
        e.currentTarget.parentElement.parentElement.parentElement.previousElementSibling.querySelector('p').innerHTML = `Back &lt; Edit Introduction Screen ${ which === 'intro1' ? 1: which === 'intro2' ? 2 : 3 }`;
        e.currentTarget.parentElement.parentElement.parentElement.previousElementSibling.querySelector('button').style.display = 'none';
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