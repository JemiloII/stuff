public class Car {

  public int miles = 0;

  public int miles() {
    return 12;
  }

  public static void main(String[] args) {
    Car car = new Car();
    System.out.println(car.miles);
    System.out.println(car.miles());
  }

}