package galvanize;

import inheritance02_lib.*;

public class Inheritance02 {
  public static void main(String[] args){
    Employee employee = new Employee();
    //System.out.println(employee.status);
    System.out.println(employee.getStatus());

    Manager manager = new Manager();
    //System.out.println(employee.status);
    System.out.println(employee.getStatus());
  }
}
