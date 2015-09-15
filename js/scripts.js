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
    )
    renderBackButton();
    $("#checkBalance").click(function() {
      renderBalance(account);
    });
    $("#depositForm").click(function() {
      renderDepositForm(account);
    });
  };

  function renderBalance() {
    $("#form-container").empty();
    $("#form-container").append(
      "<div id='options-menu' class='row text-center'>" +  
        "<h2>" + account.name + "</h2>" +
        "<h3>Balance: $" + account.balance + "</h3>" +
      "</div>"
    )
  };

  function renderBackButton() {
    $("#form-container").append(
      "<div class='row text-center'>" + 
        "<button id='back' class='btn btn-info'>Back</button>" +
      "</div>"
    )
  }

  function renderWithdrawalForm() {
    $("#form-container").empty();


  };

  function renderDepositForm(account) {
    $("#form-container").empty();  
    $("#form-container").append(
      "<form id='deposit-form' class='well'>" + 
        "<div class='form-group'>" +
          "<label for='deposit-amount'>Deposit Amt</label>" +
          "<input type='text' class='form-control' id='deposit-amount'>" + 
        "</div>" +
        "<div class='row text-center'>" +
          "<button type='submit' class='btn btn-primary btn-lg'>Deposit</button>" +
        "</div>" +
      "</form>"
    )
    $("#deposit-form").submit(function(e) {
      e.preventDefault();
      var depositAmt = parseInt( $("#deposit-amount").val() ); 
      account.deposit(depositAmt);
      renderBalance();
    });
  };

  function renderAccountHistoryForm() {
    $("#form-container").empty();
  };
});