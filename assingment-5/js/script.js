


function expensesAccount() {
    //total expenses 
    const foodInput = document.getElementById('food-expenses');
    const foodExpenses = parseFloat(foodInput.value);

    const rentInput = document.getElementById('rent-expenses');
    const rentExpenses = parseFloat(rentInput.value);

    const clothesInput = document.getElementById('clothes-expenses');
    const clothesExpenses = parseFloat(clothesInput.value);

    const totalExpenses = foodExpenses + rentExpenses + clothesExpenses;


    const expenses = document.getElementById('total-expenses');
    expenses.innerText = totalExpenses;
    // income
    const incomeInput = document.getElementById('total-income');
    const totalIncome = parseFloat(incomeInput.value);
    const myIncome = totalIncome - totalExpenses;
    // balance
    const balance = document.getElementById('balance');
    balance.innerText = myIncome;
    // error handle
    if (foodExpenses < 0 || rentExpenses < 0 || clothesExpenses < 0 || totalIncome < 0) {
        alert('Please Enter Positive Number');

    }
}
//total expenses & balance calculate handle event
document.getElementById('calculate-btn').addEventListener('click', function () {
    expensesAccount();

});


//money saving & remaining balance 
function savingMoneyAccount() {
    const incomeInput = document.getElementById('total-income');
    const totalIncome = parseFloat(incomeInput.value);

    const saveInput = document.getElementById('save-input');
    const saveMoney = parseFloat(saveInput.value);
    const totalSaveMoney = totalIncome * saveMoney / 100;

    const savingAmmount = document.getElementById('saving-ammount');
    savingAmmount.innerText = totalSaveMoney;

    const balance = document.getElementById('balance');
    const totalBalance = balance.innerText;
    const remainingTotalBalance = totalBalance - totalSaveMoney;

    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = remainingTotalBalance;
}

// money saving & remaining balance handle event
document.getElementById('save-btn').addEventListener('click', function () {
    savingMoneyAccount();

});