const people = [
    {
      name: "Carly",
      yearOfBirth: 1942
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

const findTheOldest = function(people) {
    let arr = [];
    const THIS_YEAR = new Date().getFullYear();

    arr = people.map((people) => (people.hasOwnProperty('yearOfDeath') ? (people.yearOfDeath - people.yearOfBirth) : THIS_YEAR - people.yearOfBirth));
    
    let oldestAge = Math.max(...arr);
    
    return people[arr.indexOf(oldestAge)];
};

findTheOldest(people)
// Do not edit below this line
module.exports = findTheOldest;
