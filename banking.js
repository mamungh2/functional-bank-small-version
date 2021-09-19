function updateTotalField(totalFieldId, amount) {
    const newTotal = parseFloat(document.getElementById(totalFieldId).innerText) + amount;
    document.getElementById(totalFieldId).innerText = newTotal;
}

function getCurrentBalance() {
    return parseFloat(document.getElementById('balance-total').innerText);
}

function updateBalance(newAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        const newBalanceTotal = previousBalanceTotal + newAmount;
        balanceTotal.innerText = newBalanceTotal;
    }
    else {
        const newBalanceTotal = previousBalanceTotal - newAmount;
        balanceTotal.innerText = newBalanceTotal;
    }
}

// handle deposit event handler
document.getElementById('deposit-button').addEventListener('click', function depositFunc(event) {
    const newDepositAmount = parseFloat(document.getElementById('deposit-input').value);
    if (newDepositAmount > 0) {
        updateTotalField('deposit-total', newDepositAmount);
        updateBalance(newDepositAmount, true);
    }
    document.getElementById('deposit-input').value = '';
});

// handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function withdrawFunc() {
    const newWithdrawAmount = parseFloat(document.getElementById('withdraw-input').value);
    const currentBalance = getCurrentBalance();
    if (newWithdrawAmount < currentBalance && newWithdrawAmount > 0) {
        updateTotalField('withdraw-total', newWithdrawAmount);
        updateBalance(newWithdrawAmount, false);
    }
});