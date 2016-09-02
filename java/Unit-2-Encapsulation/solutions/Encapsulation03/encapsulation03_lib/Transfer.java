package encapsulation03_lib;

public class Transfer {
  Account sourceAccount;
  Account destinationAccount;

  public Transfer(Account sourceAccount, Account destinationAccount) {
    this.sourceAccount = sourceAccount;
    this.destinationAccount = destinationAccount;
  }

  public void transfer(int amount) {
    sourceAccount.withdraw(amount);
    destinationAccount.deposit(amount);
  }
}
