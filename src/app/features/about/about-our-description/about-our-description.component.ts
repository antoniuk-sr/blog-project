import { OurDescription } from '@/app/types/about';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DesktopH2Component } from '../../../shared/ui/text/desktop-h2/desktop-h2.component';
import { TextBodyComponent } from '@/app/shared/ui/text/text-body/text-body.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-about-our-description',
  imports: [DesktopH2Component, TextBodyComponent, NgFor],
  templateUrl: './about-our-description.component.html',
  styleUrl: './about-our-description.component.css',
})
export class AboutOurDescriptionComponent implements OnChanges {
  @Input() ourDescription!: OurDescription;
  constructor() {}

  firstDescriptionParts: string[] = [];
  secondDescriptionParts: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (!changes['ourDescription']) return;
    const current = changes['ourDescription'].currentValue;
    this.firstDescriptionParts = current?.first_description.split('\n') || [];
    this.secondDescriptionParts = current?.second_description.split('\n') || [];
  }
}
