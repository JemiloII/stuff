package inheritance04_lib;

public class Adder {
  int x;
  int y;

  public Adder(int x, int y) {
    this.x = x;
    this.y = y;
  }

  public int add() {
    return this.x + this.y;
  }
}
