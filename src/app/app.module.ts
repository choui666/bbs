import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { pages } from '../pages';
import { myService } from '../providers/service';
import {MyReducers} from  "../providers/reducer"

import { HttpModule }    from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { IonicStorageModule } from '@ionic/storage';
@NgModule({
  declarations: [
    MyApp,
    ...pages
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    StoreModule.forRoot(MyReducers),
    HttpModule,
    // Note that you must instrument after importing StoreModule
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ...pages
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ...myService
  ]
})
export class AppModule {}
