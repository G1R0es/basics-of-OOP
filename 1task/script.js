"use strict";
class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }

  getSalary() {
    return this.rate * this.days;
  }
}
let middle = new Worker("Иван", "Иванов", 10, 31);
let junior = new Worker("Саша", "Александров", 15, 25);
console.log(middle.getSalary());
console.log(junior.getSalary());
