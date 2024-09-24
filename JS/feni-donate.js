document.getElementById('btn-donate-now2')
.addEventListener('click', function() {

    const inputDonateNumber2 = getInputFieldValueById('input-donate-amount2');
    const TotalDonateAmountNumber2 = getTotalAmountOfDonateById('total-donate-amount2');
    const mainBalanceNumber = getMainBalanceById('main-balance');

    if(isNaN(inputDonateNumber2) || inputDonateNumber2 < 0 || mainBalanceNumber < inputDonateNumber2){
        alert('Please enter a valid number.');
        return;
    }


    const newDonateBalance2 = inputDonateNumber2 + TotalDonateAmountNumber2;
    console.log(newDonateBalance2);

    const updateMainBalance = mainBalanceNumber - newDonateBalance2;

    document.getElementById('total-donate-amount2').innerText = newDonateBalance2;
    document.getElementById('main-balance').innerText = updateMainBalance;
 
});
