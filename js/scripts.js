function Account (name, balance) {
  this.name = name,
  this.balance = balance
};

Account.prototype.withdraw = function (amount) {
  return this.balance -= amount; 
};

Account.prototype.deposit = function (amount) {
  return this.balance += amount;
}

$(document).ready(function() {
  $("#create-account-form").submit(function(e) {
    e.preventDefault();
    var newName    = $("#name").val();
    var newBalance = parseFloat( $("#balance").val() );
    account = new Account(newName, newBalance);
    renderOptionsMenu(account);
  });
});

function renderOptionsMenu(account) {
  $("#form-container").empty();
  $("#form-container").append(
    "<div id='options-menu' class='row text-center'>" +  
      "<h2>Welcome <b>" + account.name + "</b>!</h2>" +
      "<h2><small>I would like to...</small></h2>" +
      "<div class='row text-center'>" +
        "<button class='btn btn-lg btn-default' id='checkBalance'>Check Balance</button>" + 
        "<button class='btn btn-lg btn-success' id='depositForm'>Make a Deposit</button>" +
        "<button class='btn btn-lg btn-danger' id='withdrawForm'>Make a Withdrawal</button>" +
      "</div>" + 
    "</div>"
  );
};

function renderWithdrawalForm() {
  $("#form-container").empty();

};

function renderDepositForm() {
  $("#form-container").empty();  
};

function renderAccountHistoryForm() {
  $("#form-container").empty();

};