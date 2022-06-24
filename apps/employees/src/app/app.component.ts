import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) {
    this.fetch();
  }

  // addTodo() {
  //   this.employees.push({
  //     name: `John Doe ${Math.floor(Math.random() * 1000)}`,
  //     title: `Title ${Math.floor(Math.random() * 1000)}`,
  //   });
  // }

  fetch() {
    this.http.get<Employee[]>('/api/employees').subscribe((e) => (this.employees = e));
  }

  addEmployee() {
    this.http.post('/api/addEmployee', {}).subscribe(() => {
      this.fetch();
    });
  }
}
