import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';

import { SigninPage } from '../pages/signin/signin';

const config = {
  apiKey: "AIzaSyAoKH9Z8bYJSx86xR9nZxqLyYzJR0PQNvI",
  authDomain: "ionic-chat-lab.firebaseapp.com",
  databaseURL: "https://ionic-chat-lab.firebaseio.com",
  projectId: "ionic-chat-lab",
  storageBucket: "ionic-chat-lab.appspot.com",
};


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SigninPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}

