const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

const inputValue = document.getElementById('value-real');
const selectedCurrency = document.getElementById('currency');
const result = document.getElementById('result');
let valueConverted = 0;

function handleSubmit(e) {
    e.preventDefault();
    if(!inputValue.value || inputValue.value < 0) {
    alert('informe um valor correto');
    return;    
    }

    else if (!selectedCurrency.value) {
        alert("Escolha uma moeda");
        return;
    }
    converter();
};

function converter(){
    if(selectedCurrency.value === 'eur' ) {
        valueConverted = inputValue.value / 6.22;
        result.innerHTML = valueFormatter('pt-BR', 'EUR');

    } else if (selectedCurrency.value === 'dol') {
        valueConverted = inputValue.value / 5.37;
        result.innerHTML = valueFormatter('en-US','USD');
    }
    inputValue.value = '';
    selectedCurrency.value = '';

};
    function valueFormatter (locale, currency) {
        const value = valueConverted.toLocaleString(`${locale}`, {style: 'currency', currency: `${currency}`});
        return `<span>🤑</span> ${value} <span>🤑</span>`
       

    };
