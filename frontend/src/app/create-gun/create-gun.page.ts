import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GunsService } from '../services/guns.service';



@Component({
  selector: 'app-create-gun',
  templateUrl: './create-gun.page.html',
  styleUrls: ['./create-gun.page.scss'],
})
export class CreateGunPage implements OnInit {
  gunFormGroup: FormGroup;

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

  trackItems(index: number, item: any) {
    return item.id;
  }

  constructor(private router: Router, public formBuilder: FormBuilder, private gunsService: GunsService) {
    this.gunFormGroup = this.formBuilder.group({
      type: ['', Validators.compose([Validators.required])],
      name: ['', Validators.compose([Validators.required])],
      country: ['', Validators.compose([Validators.required])],
      caliber: ['', Validators.compose([Validators.required])],
    });
  }
  ngOnInit() {
  }

  addGun() {
    if (this.gunFormGroup.valid) {
      console.log('Valid gun form:', this.gunFormGroup.value);
      this.gunsService.createGun(this.gunFormGroup.value).subscribe((response) => {
        this.router.navigate(['/all-guns']);
      });
    } else {
      console.log('Invalid form.');
    }
  }

  goToHome() {
    this.router.navigateByUrl("/home");
  }

}
