package galvanize;

import polymorphism01.*;

public class Polymorphism01 {
  public static void main(String[] args){
    Runner runner = new Runner();
    runner.run(new JSONImporter());
    runner.run(new XMLImporter());
    runner.run(new CSVImporter());
  }
}
