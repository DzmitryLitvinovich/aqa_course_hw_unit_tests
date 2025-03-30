class Employee {
  #salary;

  constructor(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
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

class Developer extends Employee {
  constructor(firstName, lastName, salary, programmingLanguages = []) {
    super(firstName, lastName, salary);
    this.programmingLanguages = programmingLanguages;
  }

  get programmingLanguages() {
    return this._programmingLanguages;
  }

  set programmingLanguages(value) {
    if (Array.isArray(value)) {
      this._programmingLanguages = value;
    } else {
      throw new Error('Invalid data type, should be an array');
    }
  }

  addProgrammingLanguage(language) {
    if (typeof language !== 'string') {
      throw new Error('Invalid data type, should be a string');
    } else if (language === '') {
      throw new Error('Empty string is not allowed');
    } else {
      this._programmingLanguages.push(language);
    }
  }
}

class Manager extends Employee {
  constructor(firstName, lastName, salary, teamSize) {
    super(firstName, lastName, salary);
    this.teamSize = teamSize;
  }

  increaseTeamSize() {
    this.teamSize++;
  }
}

class Designer extends Employee {
  constructor(firstName, lastName, salary, designTools = []) {
    super(firstName, lastName, salary);
    this.designTools = designTools;
  }

  get designTools() {
    return this._designTools;
  }

  set designTools(value) {
    if (Array.isArray(value)) {
      this._designTools = value;
    } else {
      throw new Error('Invalid data type, should be an array');
    }
  }

  addDesignTool(tool) {
    if (typeof tool !== 'string') {
      throw new Error('Invalid data type, should be a string');
    } else if (tool === '') {
      throw new Error('Empty string is not allowed');
    } else {
      this._designTools.push(tool);
    }
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
    } else if (this.#doesEmployeeExist(employee)) {
      throw new Error('Employee with such fullname already exists');
    } else {
      this.#employees.push(employee);
    }
  }

  #doesEmployeeExist(employee) {
    return this.#employees.some(
      ({ firstName, lastName }) => employee.firstName === firstName && employee.lastName === lastName,
    );
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

  getEmployeesByProfession(profession) {
    return this.#employees.filter((employee) => employee.constructor.name === profession);
  }
}

export { Employee, Company, Designer, Developer, Manager };
