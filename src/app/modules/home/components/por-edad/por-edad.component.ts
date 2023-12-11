import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-por-edad',
  templateUrl: './por-edad.component.html',
  styleUrls: ['./por-edad.component.css']
})
export class PorEdadComponent {

  activeRoute = inject(ActivatedRoute);
  edad: string = "";

  ngOnInit(): void {

    this.activeRoute.params.subscribe((params: any) => {
      this.edad = params.edad;
    })
  }



}
