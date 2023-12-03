import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-filters',
  templateUrl: './home-filters.component.html',
  styleUrls: ['./home-filters.component.css']
})
export class HomeFiltersComponent {

  @Input() activo: string = '';

  ngOnInit() {
    console.log(`activo: ${this.activo}`);
  }

}
