const expenseForm = document.getElementById('expense-form');
const expenseNameInput = document.getElementById('expense-name');
const expenseAmountInput = document.getElementById('expense-amount');
const expensesList = document.getElementById('expenses');
const totalAmountSpan = document.getElementById('total-amount');

let totalAmount = 0;

expenseForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const expenseName = expenseNameInput.value.trim();
    const expenseAmount = parseFloat(expenseAmountInput.value);

    if (!expenseName || isNaN(expenseAmount) || expenseAmount <= 0) {
        alert('Please enter a valid expense name and amount.');
        return;
    }

    // Add expense to the list
    const li = document.createElement('li');
    li.innerHTML = `<span>${expenseName}</span><span>$${expenseAmount.toFixed(2)}</span>`;
    expensesList.appendChild(li);

    // Update total amount
    totalAmount += expenseAmount;
    totalAmountSpan.textContent = totalAmount.toFixed(2);

    // Clear input fields
    expenseNameInput.value = '';
    expenseAmountInput.value = '';
});
