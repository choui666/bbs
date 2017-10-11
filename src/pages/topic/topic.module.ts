import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TopicPage} from './topic';
import {DirectivesModule} from "../../directives/directives.module";


@NgModule({
    declarations: [
        TopicPage,
    ],
    imports: [
        DirectivesModule,
        IonicPageModule.forChild(TopicPage),
    ],
})
export class TopicPageModule {
}
