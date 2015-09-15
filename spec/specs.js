describe("Account", function() {
  it("creates a new account with the given specifications", function() {
    var testAccount = new Account("Name", 100);
    expect(testAccount.name).to.equal("Name");
    expect(testAccount.balance).to.equal(100);
  });

  it("adds the withdraw method to all accounts", function() {
    var testAccount = new Account("Nomen", 200);
    testAccount.withdraw(50);
    expect(testAccount.balance).to.equal(150);
  });
});

