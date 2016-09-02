import org.junit.Before;
import org.junit.Test;
import java.util.ArrayList; // Import here

import static org.junit.Assert.assertEquals;

public class ZombieTest {

  @Test
  public void createZombie_ShouldHaveName() {
    Zombie zombie = new Zombie("Killer");
    assertEquals("Killer", zombie.getName()); // Change to getName();
  }

  // @Test
  // public void search_ShouldFindYoungestHumanFirst() {

  //   Zombie zombie = new Zombie("Runner");

  //   Human a = new Human("Brooks", 34);
  //   Human b = new Human("Akyuna", 21);
  //   Human c = new Human("Jeff", 36);
  //   Human d = new Human("Fabio", 28);
  //   Human e = new Human("Luke", 36);
  //   Human[] humans = {a,b,c,d,e};

  //   zombie.search(humans);
  //   ArrayList<Human> knownHumans = zombie.getHumans.get("known");

  //   assertEquals("Akyuna", knownHumans.get(0).name);

  // }

  // @Test
  // public void search_ShouldReturnArrayListOfHumans() {
  //   Zombie zombie = new Zombie("Runner");
  //
  //   Human a = new Human("Brooks", 34);
  //   Human b = new Human("Akyuna", 21);
  //   Human c = new Human("Jeff", 36);
  //   Human d = new Human("Fabio", 28);
  //   Human e = new Human("Luke", 36);
  //   Human[] humans = {a,b,c,d,e};
  //
  //   zombie.search(humans);
  //   ArrayList<Human> knownHumans = zombie.getHumans.get("known");
  //
  //   assertEquals("Fabio", knownHumans.get(1).name);
  // }


  // @Test
  // public void eat_ShouldEmptyArrayOfHumans() {
  //   Zombie zombie = new Zombie("Eater");

  //   Human a = new Human("Brooks", 34);
  //   Human b = new Human("Akyuna", 21);
  //   Human[] humans = {a,b};

  //   zombie.search(humans);
  //   zombie.eat();
  //   ArrayList<Human> knownHumans = zombie.getHumans.get("known");

  //   assertEquals(0, knownHumans.size());
  // }

  // @Test
  // public void eat_ShouldGainHealth() {
  //   Zombie zombie = new Zombie("Eater", 2);

  //   Human a = new Human("Brooks", 34);
  //   Human b = new Human("Akyuna", 21);
  //   Human[] humans = {a,b};

  //   zombie.search(humans);
  //   zombie.eat();

  //   assertEquals(4, zombie.health);
  // }

  // @Test
  // public void eat_ShouldHearVictimsPlea() {
  //   Zombie zombie = new Zombie("Eater", 2);

  //   Human a = new Human("Brooks", 34, "Help help help. Stop eating me!");
  //   Human b = new Human("Akyuna", 21, "Oh God, why? How did my life come to this?");
  //   Human[] humans = {a,b};

  //   zombie.search(humans);
  //   ArrayList<Human> knownHumans = zombie.getHumans.get("known");

  //   assertEquals("Oh God, why? How did my life come to this?", knownHumans.get(0).getPlea());
  //   assertEquals("Help help help. Stop eating me!", knownHumans.get(1).getPlea());

  // }

  // @Test
  // public void eat_ShouldCollectContentsOfStomach() {
  //   Zombie zombie = new Zombie("Chomper");

  //   Human a = new Human("Brooks", 34);
  //   Human b = new Human("Akyuna", 21);
  //   Human c = new Human("Jeff", 36);
  //   Human d = new Human("Fabio", 28);
  //   Human e = new Human("Luke", 36);
  //   Human[] humans = {a,b};

  //   zombie.search(humans);
  //   zombie.eat();

  //   ArrayList<Human> eatenVictims = zombie.getHumans.get("eaten");
  //   System.out.println("Chomper ate two victims: " + eatenVictims.get(0).name + " and " + eatenVictims.get(1).name);

  //   assertEquals("Akyuna", eatenVictims.get(0).name);

  //   Human[] humansRound2 = {c,d};
  //   zombie.search(humansRound2);
  //   zombie.eat();

  //   eatenVictims = zombie.getHumans.get("eaten");
  //   System.out.println("Chomper ate two victims: " + eatenVictims.get(0).name + " and " + eatenVictims.get(1).name);

  //   assertEquals("Jeff", eatenVictims.get(1).name);

  // }

  // @Test
  // public void isDead_ShouldClarifyIfHumanHasBeenEaten() {
  //   Zombie zombie = new Zombie("Chomper");

  //   Human a = new Human("Brooks", 34);
  //   Human b = new Human("Akyuna", 21);
  //   Human c = new Human("Jeff", 36);
  //   Human[] humans = {a,b,c};

  //   zombie.search(humans);
  //   zombie.eat();

  //   assertEquals(true, b.isDead());

  // }

}
