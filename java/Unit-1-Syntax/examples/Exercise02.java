/*

Convert the following JavaScript to Java

  function sumArray(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
      sum += array[i]
    }
    return sum
  }

  sumArray([4,2,3,6,8])

You'll have to:

- compile and run with `javac Exercise02.java && java Exercise02`
- declare a function - don't forget to add both the return type, and the type of the parameter
- in the for loop, remember how Java declares variables (by using the type, not the `var` keyword like js)

*/

public class Exercise02 {

  // write your method here
  public static int sumArray(int[] nums) {
    int total = 0;
    for (int i=0; i<nums.length; i++) {
      total = total + nums[i];
    }
    return total;
  }

  public static void main(String[] args) {
    Exercise02 instance = new Exercise02();
    int[] input = {4,2,3,6,8,};
    int sum = instance.sumArray(input);
    System.out.println(sum);
  }

}