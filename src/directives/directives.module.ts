import {NgModule} from '@angular/core';
import {ImgCaptchaDirective} from './img-captcha/img-captcha';
import {LoginClickDirective} from './login-click/login-click';
@NgModule({
    declarations: [
        ImgCaptchaDirective,
        LoginClickDirective
    ],
    imports: [],
    exports: [
        ImgCaptchaDirective,
        LoginClickDirective
    ]
})
export class DirectivesModule {
}
