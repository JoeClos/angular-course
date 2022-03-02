import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Inject, Injector, OnInit} from '@angular/core';
import {Course} from './model/course';
import {Observable} from 'rxjs';
import {AppConfig, CONFIG_TOKEN} from './config';
import {COURSES} from '../db-data';
import {CoursesService} from './courses/courses.service';
import {createCustomElement} from '@angular/elements';
import {CourseTitleComponent} from './course-title/course-title.component';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

    courses = COURSES;
    title = COURSES[0].description;
    price = 9.99;
    rate = 0.67;

    course = COURSES[0];
    startDate = new Date(2000, 0 , 1);

    constructor() {

    }

    ngOnInit() {


    }
    onCourseSelected(course:Course) {
        console.log("App component", course);
    }

}
