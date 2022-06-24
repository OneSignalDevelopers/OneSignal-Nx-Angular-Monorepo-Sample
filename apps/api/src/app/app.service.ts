import { Injectable } from '@nestjs/common';

interface Employee {
  name: string;
  title: string;
}

@Injectable()
export class AppService {
  employees: Employee[] = [
    { 
      name: 'John Doe',
      title: 'Todo 1'
     },
    { 
      name: 'Jane Doe',
      title: 'Todo 2'
     }
  ];
  getData(): Employee[] {
    return this.employees;
  }

  addEmployee() {
    this.employees.push({
          name: `John Doe ${Math.floor(Math.random() * 1000)}`,
          title: `Title ${Math.floor(Math.random() * 1000)}`,
        });
    }
}
