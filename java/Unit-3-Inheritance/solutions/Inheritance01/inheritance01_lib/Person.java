package inheritance01_lib;

public class Person {
  public void printName(String first, String last) {
    System.out.println(first + " " + last);
  }
  public void printName(String first, String middle, String last) {
    System.out.println(first + " " + " " + middle + " " + last);
  }
  public void printName(String first, String middle, String last, String lastFirst) {
    System.out.println(first + " " + " " + middle + " " + last);
  }
  public void printName(String first, String last, Boolean lastFirst) {
    if (lastFirst) {
      System.out.println(last + ", " + first);
    } else {
      System.out.println(first + " " + last);
    }
  }
}
