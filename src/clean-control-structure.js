const TYPE_CREDIT_CARD = 'CREDIT_CARD';
const TYPE_PAY_PAY = 'PAYPAL';
const TYPE_PLAN = 'PLAN';

main();

function main() {
  const transactions = [
    {
      id: 't1',
      type: 'PAYMENT',
      status: 'OPEN',
      method: 'CREDIT_CARD',
      amount: '23.99',
    },
    {
      id: 't2',
      type: 'PAYMENT',
      status: 'OPEN',
      method: 'PAYPAL',
      amount: '100.43',
    },
    {
      id: 't3',
      type: 'REFUND',
      status: 'OPEN',
      method: 'CREDIT_CARD',
      amount: '10.99',
    },
    {
      id: 't4',
      type: 'PAYMENT',
      status: 'CLOSED',
      method: 'PLAN',
      amount: '15.99',
    },
  ];

  try {
    processTransactions(transactions);
  } catch (error) {
    showErrorMessage(error.message);
  }
}

function processTransactions(transactions) {
  validateTransactions(transactions);

  for (const transaction of transactions) {
    processTransaction(transaction);
  }
}

function validateTransactions(transactions) {
  if (isEmpty(transactions)) {
    const error = new Error('No transactions provided!');
    error.code = 1;
    throw error;
  }
}

function isEmpty(transactions) {
  return !transactions || transactions.length === 0;
}

function showErrorMessage(message, item = {}) {
  console.log(message);
  console.log(item);
}

function processTransaction(transaction) {
  try {
    validateTransaction(transaction);
    processWithProcessor(transaction);
  } catch (error) {
    showErrorMessage(error.message, error.item);
  }
}

function validateTransaction(transaction) {
  if (!isOpen(transaction)) {
    const error = new Error('Invalid transaction type!');
    throw error;
  }

  if (!isPayment(transaction) && !isRefund(transaction)) {
    const error = new Error('Invalid transaction type!');
    error.item = transaction;
    throw error;
  }
}

function processWithProcessor(transaction) {
  const processors = getTransactionProcessors(transaction);

  if (isPayment(transaction)) {
    processors.processPayment(transaction);
  } else {
    processors.processRefund(transaction);
  }
}

function getTransactionProcessors(transaction) {
  let processors = {
    processPayment: null,
    processRefund: null,
  };

  if (usesTransactionMethod(transaction, TYPE_CREDIT_CARD)) {
    processors.processPayment = processCreditCardPayment;
    processors.processRefund = processCreditCardRefund;
  } else if (usesTransactionMethod(transaction, TYPE_PAY_PAY)) {
    processors.processPayment = processPayPalPayment;
    processors.processRefund = processPayPalRefund;
  } else if (usesTransactionMethod(transaction, TYPE_PLAN)) {
    processors.processPayment = processPlanPayment;
    processors.processRefund = processPlanRefund;
  }

  return processors;
}

function usesTransactionMethod(transaction, method) {
  return transaction.method === method;
}

function isOpen(transaction) {
  return transaction.status === 'OPEN';
}

function isPayment(transaction) {
  return transaction.type === 'PAYMENT';
}

function isRefund(transaction) {
  return transaction.type === 'REFUND';
}

function processCreditCardTransaction(transaction) {
  if (isPayment(transaction)) {
    processCreditCardPayment(transaction);
  } else if (isRefund(transaction)) {
    processCreditCardRefund(transaction);
  }
}
function processPayPalTransaction(transaction) {
  if (isPayment(transaction)) {
    processPayPalPayment(transaction);
  } else if (isRefund(transaction)) {
    processPayPalRefund(transaction);
  }
}

function processPlanTransaction(transaction) {
  if (isPayment(transaction)) {
    processPlanPayment(transaction);
  } else if (isRefund(transaction)) {
    processPlanRefund(transaction);
  }
}

function processCreditCardPayment(transaction) {
  console.log(
    'Processing credit card payment for amount: ' + transaction.amount
  );
}

function processCreditCardRefund(transaction) {
  console.log(
    'Processing credit card refund for amount: ' + transaction.amount
  );
}

function processPayPalPayment(transaction) {
  console.log('Processing PayPal payment for amount: ' + transaction.amount);
}

function processPayPalRefund(transaction) {
  console.log('Processing PayPal refund for amount: ' + transaction.amount);
}

function processPlanPayment(transaction) {
  console.log('Processing plan payment for amount: ' + transaction.amount);
}

function processPlanRefund(transaction) {
  console.log('Processing plan refund for amount: ' + transaction.amount);
}
