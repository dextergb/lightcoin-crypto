/*
* Features:

* Here's a list of features that our code needs to support:

* Allow multiple accounts to be created
* Each account can have many transactions
* Allow withdrawals and deposits into accounts
* Allow us to retrieve the transaction history of an account (all withdrawals and deposits)
* Allow us to retrieve the current balance of the account at any time
* Don't allow withdrawals that exceed the remaining balance of the account
*/

let balance = 500.0;

class Account {
  constructor(username) {
    this.username = username;
    // Have the account balance start at $0 since that makes more sense.
    this.balance = 0;
  }
}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    this.account.balance += this.value;
  }
}

class Deposit extends Transaction {
  get value() {
    return this.amount;
  }
}

class Withdrawal extends Transaction {
  get value() {
    return -this.amount;
  }
}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account("billybob");

console.log("Starting Balance:", myAccount.balance);

const t1 = new Deposit(120.0, myAccount);
t1.commit();

const t2 = new Withdrawal(50.0, myAccount);
t2.commit();

console.log("Ending Balance:", myAccount.balance);
