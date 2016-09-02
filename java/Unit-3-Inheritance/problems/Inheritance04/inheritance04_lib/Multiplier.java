package inheritance04_lib;

public class Multiplier {
  int x;
  int y;

  public Multiplier(int x, int y) {
    this.x = x;
    this.y = y;
  }

  public int multiply() {
    return this.x * this.y;
  }
}
