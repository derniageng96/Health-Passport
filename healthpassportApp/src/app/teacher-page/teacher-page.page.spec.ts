import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeacherPagePage } from './teacher-page.page';

describe('TeacherPagePage', () => {
  let component: TeacherPagePage;
  let fixture: ComponentFixture<TeacherPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeacherPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
