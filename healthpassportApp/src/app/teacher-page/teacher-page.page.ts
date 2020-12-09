import { Component, OnInit } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import {NavController,Platform} from '@ionic/angular';
import { ActivatedRoute,  Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-teacher-page',
  templateUrl: './teacher-page.page.html',
  styleUrls: ['./teacher-page.page.scss'],
})
export class TeacherPagePage implements OnInit {

  constructor(
    public platform				: Platform,
    private screenOrientation	: ScreenOrientation,
    public navCtrl      : NavController,
    public route	      : ActivatedRoute, 
		public router	      : Router 
  ) { }

  ngOnInit() {
  }

  async studentneeds()
  {
    this.navCtrl.navigateRoot('/student-needs');
  }
}
