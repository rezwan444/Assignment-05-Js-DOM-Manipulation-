// common functions
function getTextNumber(id) {
    return Number(document.getElementById(id).innerText);
}

function getNumber(id) {
    return Number(document.getElementById(id).value);
}

// this is another common function
function multiDonate(inputBalanceId, donatedBalanceId, modalId, title) {

    const mainBalance = getTextNumber('mainBalance');
    const inputBalance = getNumber(inputBalanceId);
    const donatedBalance = getTextNumber(donatedBalanceId);

    if (isNaN(inputBalance) || inputBalance <= 0) {
        alert('Invalid input');
        return;
    }
    if (inputBalance > mainBalance) {
        alert('Not enough balance for Donation.');
        return;
    }

    const donateAmount = (donatedBalance + inputBalance);
    document.getElementById(donatedBalanceId).innerText = donateAmount;
 
    const remainBalance = mainBalance - inputBalance;
    document.getElementById('mainBalance').innerText = remainBalance;

    document.getElementById(modalId).showModal();

    const donateTitle = document.getElementById(title).innerText;
    const historySection = document.getElementById('history-section');


    const date = new Date();
    const fullDate = date.toString();

    const div = document.createElement('div');
    div.innerHTML = `
    <div class="rounded-xl p-6 border-2 border-gray-400">
    <div class="space-y-4">
    <h2 class="font-bold text-lg">${inputBalance} Taka is donated for ${donateTitle}</h2>
                    <p class="text-subtitle text-sm w-full bg-gray-100 p-2 rounded-md">Date : ${fullDate}</p>
                </div>
            </div>

            `
    historySection.appendChild(div);
    document.getElementById(inputBalanceId).value = "";
}

// donate card 1
document.getElementById('donateBtn1').addEventListener('click', function () {
    multiDonate('inputBalance1', 'donatedBalance1', 'my_modal_1', 'donateTitle1');
});

// donate card 2
document.getElementById('donateBtn2').addEventListener('click', function () {
    multiDonate('inputBalance2', 'donatedBalance2', 'my_modal_2', 'donateTitle2');
});
// donate card 3
document.getElementById('donateBtn3').addEventListener('click', function () {
    multiDonate('inputBalance3', 'donatedBalance3', 'my_modal_3', 'donateTitle3');
});


// Toggle section
const donationTab = document.getElementById('donateToggleBtn');
const historyTab = document.getElementById('historyToggleBtn');


historyTab.addEventListener('click', function () {
    historyTab.classList.remove('bg-white');
    historyTab.classList.add(
        "bg-[#B4F461]",
        "text-black"
    );

    donationTab.classList.remove("bg-primary");
    donationTab.classList.add(
        "border-gray-400",
        "border-2",
        "bg-transparent",
        "text-gray-500"
    );
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
});

donationTab.addEventListener('click', function () {
    donationTab.classList.add(
        "bg-[#B4F461]",
        "text-black"
    );
    historyTab.classList.remove(
        "bg-[#B4F461]",
        "text-black"
    );
    donationTab.classList.remove(
        "border-gray-400",
        "border-2",
        "bg-transparent",
        "text-gray-500"
    );
    document.getElementById('donation-section').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');
});
