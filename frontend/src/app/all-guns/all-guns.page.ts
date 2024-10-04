import { Component, OnInit } from '@angular/core';
import { GunsService } from '../services/guns.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-guns',
  templateUrl: './all-guns.page.html',
  styleUrls: ['./all-guns.page.scss'],
})
export class AllGunsPage implements OnInit {

  guns: any = [];

  constructor(private gunService: GunsService, private router: Router) { }

  ngOnInit() {
    this.getAllGuns();
  }

  ionViewWillEnter() {
    this.getAllGuns();
  }

  getAllGuns() {
    this.gunService.getGuns().subscribe(response => {
      this.guns = response;
    })
  }

  goToHome() {
    this.router.navigateByUrl("/home")
  }

  goToUpdateGuns(id: any) {
    this.gunService.setCardId(id); 
    this.router.navigateByUrl("/updates");  
  }

  deleteGun(id: any) {
    this.gunService.delete(id).subscribe((response) => {
      this.getAllGuns();
    });
  }
}

