class Person
  def initialize(name)
    @name = name
  end

  def name
    @name
  end

  def speak
    "Little to say usually."
  end
end

class LoquaciousPerson < Person
  def speak
    super + " " + "However, sometimes I have a lot to say, actually, no all the time I have a lot to say."
  end
end