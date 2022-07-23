const inputQR = document.querySelector('#qr-input');
inputQR.addEventListener('keyup', () => {
    if (inputQR.value.length > 0) {
        generateQR.disabled = false;
        generateQR.style.background = '#159A9C';
        generateQR.style.color = '#FFFFFF';
    } else {
        generateQR.disabled = true;
        generateQR.style.background = '#B4BEC9';
    }
});

const generateQR = document.querySelector('#qr-button');
generateQR.addEventListener('click', () => {
    document.querySelector('#qr-image').src = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${inputQR.value}`;
    document.querySelector('#qr-text').innerHTML = inputQR.value;
});