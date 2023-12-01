import { Component, inject } from '@angular/core';
import { ILogopeda } from 'src/app/core/models/logopeda.interface';
import { LogopedasService } from '../../services/logopedas.service';


@Component({
  selector: 'app-lista-logopedas',
  templateUrl: './lista-logopedas.component.html',
  styleUrls: ['./lista-logopedas.component.css']
})
export class ListaLogopedasComponent {
  arrUsers: ILogopeda[] = [];

  logopedasServices = inject(LogopedasService)

  async ngOnInit(): Promise<void> {
    this.getPage();
  }


  async getPage() {
    try {
      debugger;
      const response = await this.logopedasServices.getTop20();
      // console.log(response)
      //  this.currentPage = response.page;
      //   this.totalPage = response.total_pages;
      //   this.arrPag = new Array(this.totalPage).fill(0);
      this.arrUsers = response;
    } catch (err) {
      console.log(err);
    }
  }
}
