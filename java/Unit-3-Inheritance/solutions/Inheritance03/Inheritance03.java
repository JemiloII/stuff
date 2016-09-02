package galvanize;

import inheritance03_lib.*;

public class Inheritance03 {
  public static void main(String[] args){
    Employee employee = new Employee();
    //System.out.println(employee.status);
    System.out.println(employee.getStatus());

    Manager manager = new Manager();
    //System.out.println(manager.status);
    System.out.println(manager.getStatus());
  }
}
