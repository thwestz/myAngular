import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { RouterModule, Routes} from "@angular/router";

import { GetphotoService } from './services/getphoto.service.';
import { ProfileComponent } from './components/profile/profile.component';
import { GetDogService } from './services/getDog.Service';

const appRoutes:Routes = [
  {path:"",component:UserComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"profile",component:ProfileComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutusComponent,
    ProfileComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ GetphotoService ,GetDogService],
  bootstrap: [AppComponent]
})
export class AppModule { }