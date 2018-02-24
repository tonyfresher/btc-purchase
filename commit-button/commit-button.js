function sendForm() {
    let elementsToHide = [
        document.querySelector('.form'),
        document.querySelector('.top-corners'),
        document.querySelector('.hr_horisontal_stripes'),
        document.querySelector('.commit-button'),
        document.querySelector('.commit-button').parentElement
    ];

    for (let element of elementsToHide) {
        element.style.display = 'none';
    }
}

document.querySelector('.commit-button').addEventListener('click', sendForm, false);