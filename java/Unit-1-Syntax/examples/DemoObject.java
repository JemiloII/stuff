public class DemoObject {

  public int foo;

  public DemoObject(int _foo) {
    this.foo = _foo;
  }

  public void printMe() {
    System.out.println(this);
  }

  public void printFoo() {
    System.out.println(this.foo);
  }

  public static void main(String[] args) {

    DemoObject objOne = new DemoObject(1);
    objOne.printMe();
    objOne.printFoo();

    DemoObject objTwo = new DemoObject(2);
    objTwo.printMe();
    objTwo.printFoo();

  }

}