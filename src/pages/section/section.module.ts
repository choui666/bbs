/**
 * Created by admin on 2017/9/6.
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SectionPage } from './section';


@NgModule({
  declarations: [
    SectionPage,
  ],
  imports: [
    IonicPageModule.forChild(SectionPage),
  ],
  exports: [
    SectionPage
  ]
})
export class SectionModule {}
