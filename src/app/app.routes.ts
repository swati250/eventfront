import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EventComponent } from './event/event.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { EventdetailComponent } from './eventdetail/eventdetail.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HallComponent } from './hall/hall.component';
import { ViewfeedbackComponent } from './viewfeedback/viewfeedback.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ViewregisterComponent } from './viewregister/viewregister.component';
import { VieweventdetailComponent } from './vieweventdetail/vieweventdetail.component';
import { ViewhallComponent } from './viewhall/viewhall.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'event',component:EventComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'contact',component:ContactComponent},
    {path:'eventdetail',component:EventdetailComponent},
    {path:'feedback',component:FeedbackComponent},
    {path:'hall',component:HallComponent},
    {path:'viewfeedback',component:ViewfeedbackComponent},
    {path:'alogin',component:AdminloginComponent},
    {path:'vreg',component:ViewregisterComponent},
    {path:'viewedetail',component:VieweventdetailComponent},
    {path:'viewhall/:loc',component:ViewhallComponent}
];
