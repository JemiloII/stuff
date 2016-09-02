public class Human implements Person {
    /**
     * The name of the zombie.
     */
	private String name;
    /**
     * What the human says when the zombie eats them.
     */
    private String plea;
    /**
     * The age of the human.
     */
	private int age;
    /**
     * Whether or not the person has been eaten.
     */
	private boolean eaten;

    /**
     * Constructor, initiates with name and age.
     * @param name the name of the human.
     * @param age how old the human is.
     */
    public Human(String name, int age){
        // Set the instance name and age here.
    }

    /**
     * Constructor, initiates with name, age and plea.
     * @param name the name of the human.
     * @param age the age of the human.
     * @param plea what the human says when the zombie eats them.
     */
    public Human(String name, int age, String plea){
        this(name, age); // This calls the constructor above, so name and age are already set.
        // Set the plea here
    }

    @Override
    public boolean isDead(){
        return eaten;
	}

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPlea() {
        return plea;
    }

    public void setPlea(String plea) {
        this.plea = plea;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public boolean isEaten() {
        return eaten;
    }

    public void setEaten(boolean eaten) {
        this.eaten = eaten;
    }
}
