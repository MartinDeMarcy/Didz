import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Firebase & AngularFire
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { environment } from '../environments/environment';

// Pages
import { HomePage } from '../pages/home/home';
import { HomePageModule } from '../pages/home/home.module';
import { Profile } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
import { LoginPageModule } from '../pages/login/login.module';

// Plugin
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [MyApp, Profile],
  imports: [
	  BrowserModule,
	  AngularFireModule.initializeApp(environment.firebase),
	  AngularFireDatabaseModule,
	  AngularFireAuthModule,
	  HomePageModule,
	  LoginPageModule,
	  IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, Profile, LoginPage],
  providers: [StatusBar, SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
