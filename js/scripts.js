function Account (name, balance) {
  this.name = name,
  this.balance = balance
};

Account.prototype.withdraw = function (amount) {
  return this.balance -= amount; 
};

Account.prototype.deposit = function (amount) {
  return this.balance += amount;
};

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
    $("#sub-header").text("");
    $("#form-container").append(
      "<div id='options-menu' class='row text-center'>" +  
        "<h2>Welcome <b>" + account.name + "</b>!</h2>" +
        "<h2><small>I would like to...</small></h2>" +
        "<div class='row text-center'>" +
          "<button class='btn btn-lg btn-default' id='checkBalance'>Check Balance</button>" + 
          "<button class='btn btn-lg btn-success' id='depositForm'>Make a Deposit</button>" +
          "<button class='btn btn-lg btn-danger' id='withdrawalForm'>Make a Withdrawal</button>" +
        "</div>" + 
      "</div>" 
    )
    renderBackButton();
    $("#checkBalance").click(function() { renderBalance(account); });
    $("#depositForm").click(function() { renderDepositForm(account); });
    $("#withdrawalForm").click(function() { renderWithdrawalForm(account); });
  };

  function renderBalance() {
    $("#form-container").empty();
    $("#form-container").append(
      "<div id='options-menu' class='row text-center'>" +  
        "<h2>" + account.name + "</h2>" +
        "<h3>Balance: $" + account.balance + "</h3>" +
      "</div>"
    )
    renderBackButton();
  };

  function createEventListener() {
    $(document).find("#back").click(function() {
      renderOptionsMenu(account);
    });
  };

  function renderBackButton() {
    $("#form-container").append(
      "<hr>" +
      "<div class='row text-center'>" + 
        "<button id='back' class='btn btn-primary btn-lg'>Back</button>" +
      "</div>"
    )
    createEventListener();
  };

  function renderWithdrawalForm() {
    $("#form-container").empty();
    $("#form-container").append(
      "<form id='withdrawal-form' class='well'>" + 
        "<div class='form-group'>" +
          "<label for='withdrawal-amount'>Amt to withdraw</label>" +
          "<input type='text' class='form-control' id='withdrawal-amount'>" + 
        "</div>" +
        "<div class='row text-center'>" +
          "<button type='submit' class='btn btn-primary btn-lg'>Withdrawal</button>" +
        "</div>" +
      "</form>"
    )
    renderBackButton();
    $("#withdrawal-form").submit(function(e) {
      e.preventDefault();
      var withdrawAmt = parseInt( $("#withdrawal-amount").val() );
      account.withdraw(withdrawAmt);
      renderBalance();
    });
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
    renderBackButton();
    $("#deposit-form").submit(function(e) {
      e.preventDefault();
      var depositAmt = parseInt( $("#deposit-amount").val() ); 
      account.deposit(depositAmt);
      renderBalance();
    });
  };

  // Extra features 
  // function renderAccountHistoryForm() {
  //   $("#form-container").empty();
  // };
});