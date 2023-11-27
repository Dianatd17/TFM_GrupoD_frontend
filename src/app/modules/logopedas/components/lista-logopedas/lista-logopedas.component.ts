import { Component, inject } from '@angular/core';
import { IUser } from 'src/app/core/models/user.interface';
import { LogopedasService } from '../../services/logopedas.service';

@Component({
  selector: 'app-lista-logopedas',
  templateUrl: './lista-logopedas.component.html',
  styleUrls: ['./lista-logopedas.component.css']
})
export class ListaLogopedasComponent {
  arrUsers: IUser[] = [];

  logopedasServices = inject(LogopedasService)

  //usersServices = inject(UsersService);


  async ngOnInit(): Promise<void> {
    this.getPage();
  }


  async getPage() {
    try {

      const response = await this.logopedasServices.getTop20();
      console.log(response);
      //  this.currentPage = response.page;
      //   this.totalPage = response.total_pages;
      //   this.arrPag = new Array(this.totalPage).fill(0);
      this.arrUsers = response.logopedas;
    } catch (err) {
      console.log(err);
    }
  }

}
