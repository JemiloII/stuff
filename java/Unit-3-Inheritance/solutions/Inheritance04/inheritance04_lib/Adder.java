package inheritance04_lib;

public class Adder extends Calculator {
  public Adder(int x, int y) {
    super(x, y);
  }
  public int add() {
    return this.x + this.y;
  }
}
