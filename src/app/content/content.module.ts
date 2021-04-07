import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { AboutComponent } from './about/about.component';
import { FactsComponent } from './facts/facts.component';
import { SkillsComponent } from './skills/skills.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [AboutComponent, FactsComponent, SkillsComponent, ResumeComponent, ProjectsComponent, CertificationsComponent, ContactComponent],
  imports: [
    CommonModule,
    ContentRoutingModule
  ],
  exports: [
    AboutComponent, 
    FactsComponent,
    SkillsComponent,
    ResumeComponent, 
    ProjectsComponent, 
    CertificationsComponent,
    ContactComponent
  ]
})
export class ContentModule { }
