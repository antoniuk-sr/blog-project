import { AboutService } from '@/app/api/about/about.service';
import { AboutDrivesComponent } from '@/app/features/about/about-drives/about-drives.component';
import { AboutHeroComponent } from '@/app/features/about/about-hero/about-hero.component';
import { AboutOurDescriptionComponent } from '@/app/features/about/about-our-description/about-our-description.component';
import { AboutTeamComponent } from '@/app/features/about/about-team/about-team.component';
import { AboutTimelineComponent } from '@/app/features/about/about-timeline/about-timeline.component';
import { About } from '@/app/types/about';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [
    AboutHeroComponent,
    AboutDrivesComponent,
    AboutOurDescriptionComponent,
    AboutTimelineComponent,
    AboutTeamComponent,
  ],
  providers: [AboutService],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  constructor(private aboutService: AboutService) {}

  about!: About;

  ngOnInit(): void {
    this.aboutService.getAbout().subscribe((about) => {
      this.about = about;
    });
  }
}
