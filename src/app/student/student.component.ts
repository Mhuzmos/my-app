import { Component, OnInit } from '@angular/core';
import { student } from './student';
import { students } from './students-mock';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: student[]=students;
  selectedStudent: student;
  constructor() { }

  ngOnInit() {
  }
onselectStudent(row: student) {
  this.selectedStudent=row;
}
}
