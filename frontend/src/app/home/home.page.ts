import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GunsService } from '../services/guns.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name: string = '';

  constructor(private router: Router, private gunService: GunsService) {}

  goToMyGuns(){
    this.router.navigateByUrl("/all-guns")
  }

  goToCreateGuns(){
    this.router.navigateByUrl("/create-gun")
  }

  ionViewWillEnter() {
    this.name = this.gunService.getName();  // Obtén el valor cuando la página se cargue
  }
}

