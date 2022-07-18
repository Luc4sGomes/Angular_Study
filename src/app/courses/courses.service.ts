import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  getCourses() {
    return [
      { id: 1, name: 'JavaFX' },
      { id: 2, name: 'AngularJS' },
      { id: 3, name: 'TODDYNHO' },
    ];
  }

  getCourse(id: number): any {
    let courses = this.getCourses();
    for (let i = 0; i < courses.length; i++) {
      let course = courses[i];
      if (course.id == id) {
        return course;
      }
      else {
        return null;
      }
    }
  }

  constructor() { }
}
