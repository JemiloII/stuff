package encapsulation02_lib;

public class Proposal {
  private String name = "test";
  public String getName() {
    return name;
  }
  public String setName(String name) {
    this.name = name;
    return name;
  }
}
