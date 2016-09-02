package encapsulation03_lib;

public class Account {
  private int balance = 0;
  private int[] transactions = new int[10];
  private int index = 0;
  public int balance() {
    int total = 0;
    for (int i=0; i<transactions.length; i++) {
      total += transactions[i];
    }
    return total;
  }
  public void deposit(int amount) {
    this.transactions[index] = amount;
    this.index++;
  }
  public void withdraw(int amount) {
    this.transactions[index] = amount * -1;
    this.index++;
  }
}
