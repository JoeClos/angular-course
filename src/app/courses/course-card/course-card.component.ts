import {
    AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit,
    Attribute,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component, DoCheck,
    EventEmitter,
    Input, OnChanges,
    OnDestroy,
    OnInit,
    Output
} from '@angular/core';
import {Course} from '../../model/course';
import {CoursesService} from '../courses.service';



@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements  OnInit {

    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    @Output('courseSelected')
    courseEmitter = new EventEmitter<Course>();




    constructor() {


    }

    ngOnInit(): void {


    }

    isImageVisible() {
        return this.course && this.course.iconUrl;
    }

    onCourseViewed() {

        this.courseEmitter.emit(this.course);

    }

    cardClasses() {

        if (this.course.category == 'BEGINNER') {
            return 'beginner';
        }
        
    }

    cardStyles() {
        return {
          'background-image': 'url(' + this.course.iconUrl + ')'
      };
    }
}
