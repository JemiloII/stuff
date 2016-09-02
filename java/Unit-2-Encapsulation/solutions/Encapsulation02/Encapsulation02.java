package galvanize;

import encapsulation02_lib.Proposal;

public class Encapsulation02 {
  public static void main(String[] args){
    Proposal prop = new Proposal();
    System.out.println(prop.getName());
    System.out.println(prop.setName("Michael"));
    System.out.println(prop.getName());
  }
}
