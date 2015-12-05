var account = {
	balance : 0
};

//fundction deposit(account, amount)
var deposit = function(amount) {
	account.balance += amount;
	console.log("Your balance after adding "+amount +" is "+account.balance)
}
//function withdraw(account, amount)
var withdraw = function(amount) {
	account.balance -= amount;
	console.log("Your balance after deducting "+amount +" is "+account.balance)
}
//function Balance(account)
var finalBalance = function() {
	console.log("Your account have " + account.balance);
}

deposit(500);

withdraw(100);

finalBalance();