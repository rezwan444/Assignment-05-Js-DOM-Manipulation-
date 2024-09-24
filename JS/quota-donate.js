document.getElementById('btn-donate-now3')
.addEventListener('click', function() {

    const inputDonateNumber3 = getInputFieldValueById('input-donate-amount3');
    const TotalDonateAmountNumber3 = getTotalAmountOfDonateById('total-donate-amount3');
    const mainBalanceNumber = getMainBalanceById('main-balance');


    if(isNaN(inputDonateNumber3) || inputDonateNumber3 < 0 || mainBalanceNumber < inputDonateNumber3){
        alert('Please enter a valid number.');
        return;
    }


    const newDonateBalance3 = inputDonateNumber3 + TotalDonateAmountNumber3;
    console.log(newDonateBalance3);

    const updateMainBalance = mainBalanceNumber - newDonateBalance3;

    document.getElementById('total-donate-amount3').innerText = newDonateBalance3;
    document.getElementById('main-balance').innerText = updateMainBalance;
 
});
