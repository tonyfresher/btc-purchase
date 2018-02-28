btcToRubCoefficent = 575483.60;
btcAmmountSelector = '.ammount-selector__ammount_btc'
rubAmmountSelector = '.ammount-selector__ammount_rub'


function convertRub() {
    let rubles = document.querySelector('.ammount-selector__ammount_rub input').value;
    document.querySelector('.ammount-selector__ammount_btc input').value = (rubles / btcToRubCoefficent).toFixed(6);
}

function convertBtc() {
    let bitcoins = document.querySelector('.ammount-selector__ammount_btc input').value;
    document.querySelector('.ammount-selector__ammount_rub input').value = (bitcoins * btcToRubCoefficent).toFixed(2);
}

function changeShadow(inputSelector, shadow) {
    document.querySelector(inputSelector).style.boxShadow = shadow;
}

function changeBorder(inputSelector, border) {
    document.querySelector(inputSelector).style.border = border;
}

document.querySelector(`${rubAmmountSelector} input`).addEventListener('input', convertRub, false);
document.querySelector(`${btcAmmountSelector} input`).addEventListener('input', convertBtc, false);

document.querySelector(`${rubAmmountSelector} input`).addEventListener(
    'focus', 
    function () {
        // changeShadow(rubAmmountSelector, '0 0 4px #ddd');
        changeBorder(rubAmmountSelector, '1px solid var(--divider-color)');
        changeBorder(btcAmmountSelector, '1px dashed var(--divider-color)');
    },
    false
);
document.querySelector(`${rubAmmountSelector} input`).addEventListener(
    'focusout', function () { changeShadow(rubAmmountSelector, '0 0'); }, false
);

document.querySelector(`${btcAmmountSelector} input`).addEventListener(
    'focus',
    function () {
        // changeShadow(btcAmmountSelector, '0 0 4px #ddd');
        changeBorder(btcAmmountSelector, '1px solid var(--divider-color)');
        changeBorder(rubAmmountSelector, '1px dashed var(--divider-color)');
    },
    false
);
document.querySelector(`${btcAmmountSelector} input`).addEventListener(
    'focusout', function () { changeShadow(btcAmmountSelector, '0 0'); }, false
);