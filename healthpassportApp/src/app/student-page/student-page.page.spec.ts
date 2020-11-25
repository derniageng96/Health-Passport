import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudentPagePage } from './student-page.page';

describe('StudentPagePage', () => {
  let component: StudentPagePage;
  let fixture: ComponentFixture<StudentPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudentPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
