document.getElementById('btn-donate-now')
.addEventListener('click', function() {

    const inputDonateNumber = getInputFieldValueById('input-donate-amount');
    const TotalDonateAmountNumber = getTotalAmountOfDonateById('total-donate-amount');
    const mainBalanceNumber = getMainBalanceById('main-balance');

    if(isNaN(inputDonateNumber) || inputDonateNumber < 0 || mainBalanceNumber < inputDonateNumber){
        alert('Please enter a valid number.');
        return;
    }

    const newDonateBalance = inputDonateNumber + TotalDonateAmountNumber;
    console.log(newDonateBalance);

    const updateMainBalance = mainBalanceNumber - newDonateBalance;

    document.getElementById('total-donate-amount').innerText = newDonateBalance;
    document.getElementById('main-balance').innerText = updateMainBalance;

    
});
