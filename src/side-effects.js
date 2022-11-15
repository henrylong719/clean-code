function initApp() {
  const success = connectDatabase();
  if (!success) {
    // side effect goes here
    console.log('Could not connect to database!');
    return;
  }
  // ...
}

function connectDatabase() {
  const didConnect = database.connect();
  if (didConnect) {
    return true;
  } else {
    return false;
  }
}

function determineSupportAgent(ticket) {
  if (ticket.requestType === 'unknown') {
    return findStandardAgent();
  }
  return findAgentByRequestType(ticket.requestType);
}

function createUser(email, password) {
  if (!isValid(email, password)) {
    // side effect goes here
    console.log('Invalid input!');
  }
}

function isValid(email, password) {
  if (!email.includes('@') || password.length < 7) {
    return false;
  }
  return true;
}

// function connectDatabase() {
//   const didConnect = database.connect();
//   if (didConnect) {
//     return true;
//   } else {
//     console.log('Could not connect to database!');
//     return false;
//   }
// }

// function determineSupportAgent(ticket) {
//   if (ticket.requestType === 'unknown') {
//     return findStandardAgent();
//   }
//   return findAgentByRequestType(ticket.requestType);
// }

// function isValid(email, password) {
//   if (!email.includes('@') || password.length < 7) {
//     console.log('Invalid input!');
//     return false;
//   }
//   return true;
// }
