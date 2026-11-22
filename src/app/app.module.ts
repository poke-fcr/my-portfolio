import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './components/landing/landing.component'
import {MatToolbarModule} from "@angular/material/toolbar";
import {SkillsHomeComponent} from "./components/skills-home/skills-home.component";
import {FooterComponent} from "./components/footer/footer.component";
import {FeaturedComponent} from "./components/featured/featured.component";
import {LearningJourneyComponent} from "./components/learning-journey/learning-journey.component";
import {AppHomeComponent} from "./components/app-home/app-home.component";
import {ContactDialogComponent} from "./components/contact-dialog/contact-dialog.component";
import {ProjectsComponent} from "./components/projects/projects.component";
import {SidemenuComponent} from "./components/sidemenu/sidemenu.component";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({ declarations: [
        AppComponent,
        LandingComponent,
        SkillsHomeComponent,
        FooterComponent,
        FeaturedComponent,
        LearningJourneyComponent,
        AppHomeComponent,
        ContactDialogComponent,
        ProjectsComponent,
        SidemenuComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatTooltipModule,
        MatDialogModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
