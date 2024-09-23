const btnDonation = document.getElementById('btnDonation');
const btnHistory = document.getElementById('btnHistory');

function switchActiveButton(activeButton, inactiveButton) {
    activeButton.classList.remove('bg-white', 'text-black');
    activeButton.classList.add('bg-[#B4F461]', 'text-black');

    inactiveButton.classList.remove('bg-[#B4F461]', 'text-white');
    inactiveButton.classList.add('bg-white', 'text-black');
}

btnDonation.addEventListener('click', () => {
    switchActiveButton(btnDonation, btnHistory);
});

btnHistory.addEventListener('click', () => {
    switchActiveButton(btnHistory, btnDonation);
});