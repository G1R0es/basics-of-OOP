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
  getName() {
    return this.name;
  }
  getSurname() {
    return this.surname;
  }
  getRates() {
    return this.rate;
  }
  getDays() {
    return this.days;
  }
}
let middle = new Worker("Иван", "Иванов", 10, 31);
let junior = new Worker("Саша", "Александров", 15, 25);

console.log(middle.getName());
console.log(middle.getSurname());
console.log(middle.getRates());
console.log(middle.getDays());
console.log(middle.getSalary());
console.log(junior.getName());
console.log(junior.getSurname());
console.log(junior.getRates());
console.log(junior.getDays());
console.log(junior.getSalary());
