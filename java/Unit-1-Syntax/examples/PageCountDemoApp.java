public class PageCountDemoApp  {

  public static void main(String[] args) {

    System.out.print("PageCount starting value: ");
    System.out.println(PageCount.count);

    PageCount.count++;
    PageCount.count++;

    System.out.print("PageCount ending value: ");
    System.out.println(PageCount.count);

  }

}