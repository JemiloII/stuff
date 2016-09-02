package inheritance04_lib;

public class Subtractor {
  int x;
  int y;

  public Subtractor(int x, int y) {
    this.x = x;
    this.y = y;
  }

  public int subtract() {
    return this.x - this.y;
  }
}
