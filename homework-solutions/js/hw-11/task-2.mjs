class Employee {
  #salary;

  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.#salary = salary;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    this._firstName = this.#validateName(value);
  }

  #validateName(name) {
    if (typeof name !== 'string') {
      throw new Error('Invalid data type, should be a string');
    }
    if (!/^[A-Za-z]{2,50}$/.test(name)) {
      throw new Error('Invalid name, must contain only Latin letters (A-Z, a-z) and be 2-50 characters long');
    }
    return name;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    this._lastName = this.#validateName(value);
  }

  get profession() {
    return this._profession;
  }

  set profession(value) {
    if (/^[A-Za-z ]+$/.test(value) && value.trim().length > 0) {
      this._profession = value;
    } else {
      throw new Error('Invalid profession. Must contain only Latin characters and spaces.');
    }
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      throw new Error('Invalid data type, salary should be a number');
    } else if (value <= 0 || value >= 10000) {
      throw new Error('Invalid salary value, should be more than 0 and less than 10000');
    }
    this.#salary = value;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Company {
  #employees;

  constructor(title, phone, address, employees) {
    this.title = title;
    this.phone = phone;
    this.address = address;
    this.#employees = [];
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  get phone() {
    return this._phone;
  }

  set phone(value) {
    this._phone = value;
  }

  get address() {
    return this._address;
  }

  set address(value) {
    this._address = value;
  }

  addEmployee(employee) {
    if (!(employee instanceof Employee)) {
      throw new Error('Only instances of Employee can be added');
    } else {
      this.#employees.push(employee);
    }
  }

  getEmployees() {
    return this.#employees;
  }

  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`;
  }

  findEmployeeByName(firstName) {
    const employee = this.#employees.find((employee) => employee.firstName === firstName);
    if (employee) {
      return employee;
    } else {
      throw new Error('Employee with such firstName not found');
    }
  }

  removeEmployee(firstName) {
    const employeeIndex = this.#getEmployeeIndex(firstName);
    this.#employees.splice(employeeIndex, 1);
  }

  #getEmployeeIndex(firstName) {
    const employeeIndex = this.#employees.findIndex((employee) => employee.firstName === firstName);
    if (employeeIndex === -1) {
      throw new Error('Employee with such firstName not found');
    } else {
      return employeeIndex;
    }
  }

  getTotalSalary() {
    return this.#employees.reduce((totalSalary, { salary }) => totalSalary + salary, 0);
  }
}

// const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
// const emp2 = new Employee('Jane', 'Smith', 'Manager', 5000);
// const emp3 = new Employee('Mark', 'Brown', 'Designer', 4000);

// const company = new Company('Tech Corp', '123-456', 'Main Street');
// company.addEmployee(emp1);
// company.addEmployee(emp2);
// company.addEmployee(emp3);

// console.log(company.getTotalSalary()); // 12000
// console.log(company.findEmployeeByName('Jane')); // Employee { firstName: 'Jane', ... }
// company.removeEmployee('John');
// console.log(company.getEmployees()); // [Employee, Employee]

export { Employee, Company };
