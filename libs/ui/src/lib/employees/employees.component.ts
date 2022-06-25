import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '@onesignal/data';

@Component({
  selector: 'onesignal-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  @Input() employees: Employee[] = []
  constructor() {}

  ngOnInit(): void {}
}
