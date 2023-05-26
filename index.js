class BankAccount{
    // properties

    constructor(accountNumber,accountHolder,balance){
        this.accountNumber=accountNumber;
        this.accountHolder=accountHolder;
        this.balance=balance;
    }
    // methods
    getAccountNumber(){
        return accountNumber;
    }
    getAccountHolder(){
        return accountHolder;
    }
    getBalance(){
        return balance;
    }
    deposit(amount){
        let new_balance=this.balance+amount
        let deposit_statement=`Previous balance :${this.balance}. New balance :${new_balance} `
        return deposit_statement
    }
    withdraw(amount){
        let new_balance=this.balance-amount
        let withdraw_statement=`Previous balance :${this.balance}. New balance :${new_balance} `
        return withdraw_statement
    }
};
class SavingsAccount extends BankAccount{
    // properties
    constructor(accountNumber,accountHolder,balance,interestRate){
        super(accountNumber,accountHolder,balance);
        this.interestRate=interestRate;
    }
    // method
    calculateInterest(){
        let total_after_interest=this.balance*this.interestRate;
        return `Interest amount : ${total_after_interest - this.balance}`
    }
};
class CheckingAccount extends BankAccount{
    // properties
    constructor(accountNumber,accountHolder,balance,overdraftLimit){
        super(accountNumber,accountHolder,balance)
        this.overdraftLimit=overdraftLimit;
    }
    // method
    withdraw(amount){
        if(this.balance>=amount){
            let remaining_amount=this.balance-amount
            return `Amount withdrawn:${amount}, Balance:${remaining_amount}`
        }else{
            let extra_amount=amount-this.balance
            // console.log(extra_amount)
            if(extra_amount<=this.overdraftLimit){
                return `Amount withdrawn:${amount}, Debt:${extra_amount}` 
            }else{
                return "Amount has exceeded overdraft limit"
            }
        }
    }
};

// retrieve account information
let user1=new BankAccount("76262","Clarence Gatama",3000)
console.log(user1.accountNumber)
console.log(user1.accountHolder)
console.log(user1.balance)
// deposit
console.log(user1.deposit(1500))
// withdraw
console.log(user1.withdraw(1500))

// display interest amount in savings account
let user2=new SavingsAccount("76262","Clarence Gatama",3000,1.08);
console.log(user2.calculateInterest())
// overdraft
let user3=new CheckingAccount("76262","Clarence Gatama",3000,500)
console.log(user3.withdraw(5000))