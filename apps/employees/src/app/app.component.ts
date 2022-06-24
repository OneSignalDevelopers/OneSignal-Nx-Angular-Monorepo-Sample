import { Component } from '@angular/core';

interface Employee {
  name: string;
  title: string;
}

@Component({
  selector: 'onesignal-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'employees';
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

  addTodo() {
    this.employees.push({
      name: `John Doe ${Math.floor(Math.random() * 1000)}`,
      title: `Title ${Math.floor(Math.random() * 1000)}`,
    });
  }
}
