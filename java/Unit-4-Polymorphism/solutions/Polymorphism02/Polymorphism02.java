package galvanize;

import polymorphism02.*;

public class Polymorphism02 {
  public static void main(String[] args){
    Runner runner = new Runner();
    runner.run(new JSONImporter());
    runner.run(new XMLImporter());
    runner.run(new CSVImporter());
  }
}
