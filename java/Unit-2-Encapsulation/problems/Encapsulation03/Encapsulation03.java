package galvanize;

import encapsulation03_lib.*;

class Encapsulation03 {
  public static void main(String[] args){
    Account sourceAccount = new Account();
    Account destinationAccount = new Account();

    sourceAccount.balance = 500;
    destinationAccount.balance = 750;

    Transfer t = new Transfer(sourceAccount, destinationAccount);
    t.transfer(250);

    System.out.println(sourceAccount.balance);
    System.out.println(destinationAccount.balance);
  }
}
