function getInputFieldValueById(id){
   const inputDonateAmount = document.getElementById(id).value;
   const inputDonateNumber = parseFloat(inputDonateAmount);
   return inputDonateNumber;
}

function getTotalAmountOfDonateById(id){
   const TotalDonateAmount = document.getElementById(id).innerText;
   const TotalDonateAmountNumber = parseFloat(TotalDonateAmount);
   return TotalDonateAmountNumber;
}

function getMainBalanceById(id){
   const mainBalance = document.getElementById(id).innerText;
   const mainBalanceNumber = parseFloat(mainBalance);
   return mainBalanceNumber;
}