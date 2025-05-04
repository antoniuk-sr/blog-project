import { ContactUs } from '@/app/types/contactUs';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-contact-us',
  imports: [],
  templateUrl: './home-contact-us.component.html',
  styleUrl: './home-contact-us.component.css',
})
export class HomeContactUsComponent {
  @Input() contactUs!: ContactUs;
}
