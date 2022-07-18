import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CoursesService } from '../courses/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  id!: number;
  inscricao!: Subscription;
  course: any;

  constructor(private route: ActivatedRoute, private courseService: CoursesService, private router: Router) {
    //this.id = this.route.snapshot.params['id'];
    //console.log(this.route);
  }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params['id'];

      this.course = this.courseService.getCourse(this.id);

      if (this.course == null) {
        this.router.navigate(['/notFind'])
      }
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
