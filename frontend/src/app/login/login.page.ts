import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GunsService } from '../services/guns.service';
GunsService
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  name: string = '';
  

  constructor(private router: Router, private gunService: GunsService) { }

  ngOnInit() {
  }

  goToHome(){
    this.router.navigateByUrl("/home")
  }

  saveName() {
    this.gunService.setName(this.name);
  }
}
