import { Component, Input } from '@angular/core';
import { Housinglocation } from '../housinglocation';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterLink, RouterOutlet],
  selector: 'app-housing-location',
  template: `
    <section class="listing">
      <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
      <img
        class="listing-photo"
        [src]="housingLocation.photo"
        alt="Exterior photo of {{housingLocation.name}}"
        crossorigin
      />
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
    </section>`,
  styleUrls: ['./housing-location.component.css'],
  standalone:true
})
export class HousingLocationComponent {
  @Input() housingLocation!: Housinglocation;
}
