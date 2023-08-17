const tabs = document.querySelector('.left_side.flex_row.space_between.center');
const appointments = document.getElementById('appointments');
const uploadType = document.getElementById('upload_type');
const file = document.getElementById('file');
const url = document.getElementById('url');
const trainingMaterial = document.getElementById('training_material');
const footer = document.getElementById('footer');
const header = document.querySelector('.right_section .header.flex_row.space_between');
const videoSection = document.querySelector('.video_section.flex_row.width_full');
const additionalInfo = document.querySelector('.additional_info.flex_row.width_full');
const popup = document.querySelector('.popup.flex_column');

function selectTab(e) {
    Array.from(e.currentTarget.children).forEach(tab => {
        tab.classList.remove('active');
    });

    e.target.classList.add('active');

    if (e.target.innerHTML === 'Training Material') {
        appointments.style.display = 'none';
        footer.style.display = 'none';
        trainingMaterial.style.display = 'flex';
        videoSection.style.display = 'none';
        additionalInfo.style.display = 'none';
        // document.querySelector('.training_material.flex_column.width_full').style.display = 'flex';
        console.log(header);
        header.querySelector('input').style.display = 'none';
        header.querySelector('button').style.display = 'flex';
        trainingMaterial.querySelector('.training_material.flex_row.width_full').style.display = 'flex';
    } else {
        appointments.style.display = 'flex';
        footer.style.display = 'flex';
        trainingMaterial.style.display = 'none';
        header.querySelector('input').style.display = 'block';
        header.querySelector('button').style.display = 'none';
    }
}

file.addEventListener('click', () => {
    uploadType.innerHTML = `
        <p>Select File</p>
        <button>Upload File</button>
    `;
});

url.addEventListener('click', () => {
    uploadType.innerHTML = `
        <input type="text" placeholder="Add Title">
    `;
});

function showAdditionalInfo(e, action) {
    if (action === 'next') {
        videoSection.style.display = 'none';
        additionalInfo.style.display = 'flex';
    } else {
        videoSection.style.display = 'flex';
        additionalInfo.style.display = 'none';
        document.querySelector('.training_material.flex_row.width_full').style.display = 'none';
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
    popup.style.display = 'flex';
    popup.style.top = `${ window.scrollY + 50 }px`;
    requestAnimationFrame(() => {
        popup.style.transform = 'scale(1)';
    });
}

function closeDetails(e) {
    requestAnimationFrame(() => {
        popup.style.transform = 'scale(0)';
    });
    setTimeout(() => {
        popup.style.display = 'none';
    }, 500);
}