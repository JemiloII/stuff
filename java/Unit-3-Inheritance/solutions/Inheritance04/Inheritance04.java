package galvanize;

import inheritance04_lib.*;

public class Inheritance04 {
  public static void main(String[] args){
    Adder adder = new Adder(5, 1);
    System.out.println(adder.add());

    Subtractor subtractor = new Subtractor(5, 1);
    System.out.println(subtractor.subtract());

    Multiplier multiplier = new Multiplier(5, 1);
    System.out.println(multiplier.multiply());
  }
}
