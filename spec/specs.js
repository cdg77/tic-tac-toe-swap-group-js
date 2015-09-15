describe("Account", function() {
  it("creates a new account with the given specifications", function() {
    var testAccount = new Account("Name", 100);
    expect(testAccount.name).to.equal("Name");
    expect(testAccount.balance).to.equal(100);
  });
});