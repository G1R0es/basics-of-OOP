class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }
  // не работает
  getCourse() {
    let year = new Date().getFullYear();
    if (this.year > 2018 && this.year < 2023) {
      return year - this.year;
    }
  }
}

let ivan = new Student("Иван", "Иванов", 2019);

console.log(ivan.name);
console.log(ivan.surname);
console.log(ivan.getFullName);
console.log(ivan.year);
console.log(ivan.getCourse);
