const tabs = document.querySelector('.left_side.flex_row.space_between.center');
const appointments = document.getElementById('appointments');
const uploadType = document.getElementById('upload_type');
const file = document.querySelectorAll('#file');
const url = document.querySelectorAll('#url');
const trainingMaterial = document.getElementById('training_material');
const footer = document.getElementById('footer');
const header = document.querySelector('.right_section .header.flex_row.space_between');
const videoSection = document.querySelector('.video_section.flex_row.width_full');
const videoSectionEdit = document.querySelector('.video_section.edit.flex_row.width_full');
const additionalInfo = document.querySelector('.additional_info.flex_row.width_full');
const popup = document.querySelector('.popup.flex_column');
const modulePopup = document.querySelector('.popup.module');
const videoPopup = document.querySelector('.popup.video');

let currentAddition = '';

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
        videoSectionEdit.style.display = 'none';
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

file.forEach(fileElement => {
    fileElement.addEventListener('click', (e) => {
        console.log('Clicked');
        e.currentTarget.parentElement.parentElement.nextElementSibling.innerHTML = `
            <p>Select File</p>
            <button>Upload File</button>
        `;
    });
});

url.forEach(urlElement => {
    urlElement.addEventListener('click', (e) => {
        e.currentTarget.parentElement.parentElement.nextElementSibling.innerHTML = `
            <input type="text" placeholder="Add Title">
        `;
    });
});


function showAdditionalInfo(e, action) {
    if (action === 'next') {
        videoSection.style.display = 'none';
        videoSectionEdit.style.display = 'none';
        additionalInfo.style.display = 'flex';
    } else if (action === 'edit') {
        videoSectionEdit.style.display = 'flex';
        document.querySelector('.training_material.flex_row.width_full').style.display = 'none';
        additionalInfo.style.display = 'none';
        if (!e.currentTarget.classList.contains('nonEdit')) videoSectionEdit.querySelector('#title').value = e.currentTarget.previousElementSibling.querySelector('p').innerText;
        else videoSectionEdit.querySelector('#title').value = '';
    } else {
        videoSection.style.display = 'flex';
        document.querySelector('.training_material.flex_row.width_full').style.display = 'none';
        additionalInfo.style.display = 'none';
        if (!e.currentTarget.classList.contains('nonEdit')) videoSection.querySelector('#title').value = e.currentTarget.previousElementSibling.querySelector('p').innerText;
        else videoSection.querySelector('#title').value = '';
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

function showTrainingPopups(e, element) {
    if (element === 'module' || element === 'category' || element === 'subcategory') {
        modulePopup.style.setProperty('display', 'block', 'important');
        gsap.fromTo(modulePopup, {
            y: '-2rem',
            opacity: 0
        }, {
            y: '0',
            opacity: 1,
            duration: 0.5,
        });
    }
    else {
        videoPopup.style.setProperty('display', 'block', 'important');
        gsap.fromTo(videoPopup, {
            y: '-2rem',
            opacity: 0
        }, {
            y: '0',
            opacity: 1,
            duration: 0.5,
        });
    }
    if (element === 'module') modulePopup.querySelector('h1').innerHTML = 'Add Module';
    else if (element === 'category') {
        modulePopup.querySelector('h1').innerHTML = 'Add Category';
        modulePopup.querySelector('input').placeholder = 'Introduction etc.';
        currentAddition = e.currentTarget.previousElementSibling.querySelector('p').innerText;
    }
    else if (element === 'subcategory') {
        modulePopup.querySelector('h1').innerHTML = 'Add Subcategory';
        modulePopup.querySelector('input').placeholder = 'About etc';
        currentAddition = e.currentTarget.previousElementSibling.querySelector('p').innerText;
    } else if (element === 'module_video') {
        videoPopup.querySelector('h1').innerHTML = 'Add Module Video';
        currentAddition = e.currentTarget.previousElementSibling.querySelector('p').innerText;
    } else if (element === 'category_video') {
        videoPopup.querySelector('h1').innerHTML = 'Add Category Video';
        currentAddition = e.currentTarget.previousElementSibling.querySelector('p').innerText;
    } else if (element === 'subcategory_video') {
        videoPopup.querySelector('h1').innerHTML = 'Add Sub Category Video';
        currentAddition = e.currentTarget.previousElementSibling.querySelector('p').innerText;
    }
}

function createEntry(e) {
    const popupName = document.querySelector('.popup.module h1').innerHTML;
    const name = document.querySelector('.popup.module input').value;
    document.querySelector('.popup.module input').value = '';

    const html = `
    <div class="tab_container flex_column tempClass">
        <div class="tab flex_row space_between">
            <div class="tab_left_side flex_row center">
                <img src="../images/remove_black.png" alt="">
                <p id='module_name'>${ name }</p>
            </div>
            <img src="../images/plus_gray.png" onclick="showTrainingPopups(event, 'category')" alt="Add module">
        </div>
        <img src="../images/plus_gray.png" alt="Add Video" onclick="showTrainingPopups(event, 'module_video')">
    </div>
    `;
    const categoryHtml = `
    <div class="tab_container flex_column tempClass">
        <div class="tab flex_row space_between">
            <div class="tab_left_side flex_row center">
                <img src="../images/remove_black.png" alt="">
                <p>${ name }</p>
            </div>
            <img src="../images/plus_gray.png" onclick="showTrainingPopups(event, 'subcategory')" alt="Add module">
        </div>
        <img src="../images/plus_gray.png" alt="Add Video" onclick="showTrainingPopups(event, 'category_video')">
    </div>
    `;
    const subcategoryHtml = `
    <div class="tab_container flex_column tempClass">
        <div class="tab flex_row space_between">
            <div class="tab_left_side flex_row center">
                <img src="../images/source_black.png" alt="">
                <p>${ name }</p>
            </div>
            <button onclick="showAdditionalInfo(event, 'edit')"><img src="../images/edit_black.png" alt=""></button>
        </div>
        <img src="../images/plus_gray.png" alt="Add Video" onclick="showTrainingPopups(event, 'subcategory_video')">
    </div>
    `;

    if (name) {
        gsap.to(modulePopup, {
            opacity: 0,
            onComplete() {
                modulePopup.style.setProperty('display', 'none', 'important');
            }
        });
        if (popupName === 'Add Module') {
            document.querySelector('.tabs').insertAdjacentHTML('beforeend', html);
            document.querySelector('.tempClass').classList.remove('tempClass');
        } else if (popupName === 'Add Category') {
            document.querySelector('.tabs').insertAdjacentHTML('beforeend', categoryHtml);
            document.querySelector('.tempClass').style.marginLeft = '2rem';
            document.querySelector('.tempClass').classList.remove('tempClass');
        } else if (popupName === 'Add Subcategory') {
            document.querySelector('.tabs').insertAdjacentHTML('beforeend', subcategoryHtml);
            document.querySelector('.tempClass').style.marginLeft = '4rem';
            document.querySelector('.tempClass').classList.remove('tempClass');
        }
    }
    
}

function createVideo(e) {
    const popupName = document.querySelector('.popup.video h1').innerHTML;
    const html = `
        <div class="video flex_row center">
            <img src="../images/play_blue.png" alt="Play Video">
            <p>Test Video</p>
            <p>11:11</p>
        </div>
    `;

    document.querySelectorAll('.tab_container').forEach(tab => {
        if (tab.querySelector('.tab_left_side p').innerText === currentAddition) tab.insertAdjacentHTML('beforeend', html);
    });

    gsap.to(videoPopup, {
        opacity: 0,
        onComplete() {
            videoPopup.style.setProperty('display', 'none', 'important');
        }
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

function setSport(e) {
    Array.from(e.currentTarget.children).forEach(button => button.classList.remove('active'));
    e.target.classList.add('active');
}