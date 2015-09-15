describe("Account", function() {
  it("creates a new account with the given specifications", function() {
    var testAccount = new Account("Name", 100);
    expect(testAccount.name).to.equal("Name");
    expect(testAccount.balance).to.equal(100);
  });

  it("adds a withdraw method to all accounts", function() {
    var testAccount = new Account("Nomen", 200);
    testAccount.withdraw(50);
    expect(testAccount.balance).to.equal(150);
  });

  it("adds a deposit method to all accounts", function() {
    var testAccount = new Account("Nomen", 200);
    testAccount.deposit(100);
    expect(testAccount.balance).to.equal(300);
  });

  it("adds a method to display previous transactions", function() {
    var testAccount = new Account("Nomen", 200);
    testAccount.deposit(100);
    testAccount.withdraw(50);
    expect(testAccount.transactions).to.eql(["Deposited - 100", "Withdrew - 50"]);
  });
});
