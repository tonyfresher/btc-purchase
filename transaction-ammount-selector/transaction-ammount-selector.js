btcToRubCoefficent = 575483.60;

function convertRub() {
    let rubles = document.querySelector('.transaction-ammount-selector__ammount_rub input').value;
    document.querySelector('.transaction-ammount-selector__ammount_btc input').value = (rubles / btcToRubCoefficent).toFixed(6);
}

function convertBtc() {
    let bitcoins = document.querySelector('.transaction-ammount-selector__ammount_btc input').value;
    document.querySelector('.transaction-ammount-selector__ammount_rub input').value = (bitcoins * btcToRubCoefficent).toFixed(2);
}

function shadowField(inputSelector, shadow) {
    document.querySelector(inputSelector).parentNode.style.boxShadow = shadow;
}

document.querySelector('.transaction-ammount-selector__ammount_rub input').addEventListener('input', convertRub, false);
document.querySelector('.transaction-ammount-selector__ammount_btc input').addEventListener('input', convertBtc, false);

document.querySelector('.transaction-ammount-selector__ammount_rub input').addEventListener(
    'focus', function () { shadowField('.transaction-ammount-selector__ammount_rub input', '0 0 4px #ddd'); }, false
);
document.querySelector('.transaction-ammount-selector__ammount_rub input').addEventListener(
    'focusout', function () { shadowField('.transaction-ammount-selector__ammount_rub input', '0 0'); }, false
);
document.querySelector('.transaction-ammount-selector__ammount_btc input').addEventListener(
    'focus', function () { shadowField('.transaction-ammount-selector__ammount_btc input', '0 0 4px #ddd'); }, false
);
document.querySelector('.transaction-ammount-selector__ammount_btc input').addEventListener(
    'focusout', function () { shadowField('.transaction-ammount-selector__ammount_btc input', '0 0'); }, false
);