class BankAccount {
    constructor(accountNumber, accountHolderName, balance) {
        this._accountNumber = accountNumber;
        this._accountHolderName = accountHolderName;
        this._balance = balance;
    }

    showAccountDetails() {
        console.log(`Account Number: ${this._accountNumber}`);
        console.log(`Account Holder Name: ${this._accountHolderName}`);
        console.log(`Balance: ${this._balance}`);
    }

    deposit(amount) {
        this._balance += amount;
        this.showAccountDetails();
    }

    withdraw(amount) {
        if (this._balance >= amount) {
            this._balance -= amount;
            this.showAccountDetails();
        } else {
            console.log("Insufficient Balance");
        }
    }
}

const myNewBankAccount = new BankAccount("987654", "Alice Smith", 2000);
myNewBankAccount.deposit(800); // Output: Account Number: 987654, Account Holder Name: Alice Smith, Balance: 2800
myNewBankAccount.withdraw(2500); // Output: Insufficient Balance
