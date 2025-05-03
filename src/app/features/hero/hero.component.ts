import { PrimaryButtonComponent } from '@/app/shared/ui/buttons/primary-button/primary-button.component';
import { SecondaryButtonComponent } from '@/app/shared/ui/buttons/secondary-button/secondary-button.component';
import { SpinnerComponent } from '@/app/shared/ui/spinner/spinner.component';
import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [
    SpinnerComponent,
    NgIf,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  title = 'hero';
  @Input() loading: boolean = false;
  @Input() header: string = '';
  @Input() subheader: string = '';
  @Input() image: string = '';
}
