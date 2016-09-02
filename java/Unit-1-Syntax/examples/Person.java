public class Person {

  public String first;
  public String last;

  public Person(String first, String last) {
    this.first = first;
    this.last = last;
  }

  public String fullName() {
    return this.first + " " + this.last;
  }

  public static void main(String[] args) {
    Person rambo = new Person("Sly", "Stallone");
    String output = rambo.fullName();
    System.out.println(output);
  }

}

