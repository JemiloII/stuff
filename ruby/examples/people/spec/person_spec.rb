require 'spec_helper'
require_relative '../person'

describe 'Person' do
  it 'should have a name' do
    person = Person.new('Chris')
    expect(person.name).to eq('Chris')
  end

  it 'should not have much to say' do
    person = Person.new('Chris')
    expect(person.speak).to eq("Little to say usually.")
  end
end

describe 'LoquaciousPerson' do
  it 'should have a name' do
    person = LoquaciousPerson.new('Chris')
    expect(person.name).to eq('Chris')
  end

  it 'should have a lot more to say' do
    person = LoquaciousPerson.new('Chris')
    expect(person.speak).to eq("Little to say usually. However, sometimes I have a lot to say, actually, no all the time I have a lot to say.")
  end
end