import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GunsService } from '../services/guns.service';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.page.html',
  styleUrls: ['./updates.page.scss'],
})
export class UpdatesPage implements OnInit {
  updateGunFormGroup: FormGroup;
  gun: any = {}
  cardId: any;
  type = [
    {
      id: 1,
      name: 'Automatic',
    },
    {
      id: 2,
      name: 'Semiautomatic',
    },
    {
      id: 3,
      name: 'Explosion',
    },
    {
      id: 4,
      name: 'Bolt',
    }
  ];

  constructor(private gunService: GunsService, private router: Router, public formBuilder: FormBuilder) { 
    this.updateGunFormGroup = this.formBuilder.group({
      type: ['', Validators.compose([Validators.required])],
      name: ['', Validators.compose([Validators.required])],
      country: ['', Validators.compose([Validators.required])],
      caliber: ['', Validators.compose([Validators.required])],
    });
  }

  ionViewWillEnter() {
    this.cardId = this.gunService.getCardId();  
    console.log('ID para actualizar:', this.cardId);
  }

  ngOnInit() {

  }

  updateGun() {

    if (this.updateGunFormGroup.valid) {
      console.log('Valid note form:', this.updateGunFormGroup.value);
      this.gunService.update(this.cardId, this.updateGunFormGroup.value).subscribe((response) => {
          console.log('Your gun was successfully updated');
        });
      this.router.navigate(['all-guns']);
    } else {
      console.log('Invalid form.');
    }
  }
    // this.gunService.update(this.cardId, this.gun).subscribe((res: any) => {
    // },
    //   (error: any) => {
    //     console.error('error al actualizar el arma', error)
    //   })
  };


