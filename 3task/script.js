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
  getRate() {
    return this.rate;
  }
  setRates(rate) {
    this.rate = rate;
  }
  getDays() {
    return this.days;
  }
  setDays(days) {
    this.days = days;
  }
}
let middle = new Worker("Иван", "Иванов", 10, 31);
let junior = new Worker("Саша", "Александров", 15, 25);

console.log(middle.getRate());
console.log(middle.getDays());
console.log(middle.getSalary());

middle.setRate(20);
middle.setDays(10);
console.log(middle.getSalary());

console.log(junior.getRate());
console.log(junior.getDays());
console.log(junior.getSalary());

junior.setRates(50);
junior.setDays(10);
console.log(junior.getSalary());
