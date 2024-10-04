import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GunsService {

  endPoint: string = 'http://localhost:8080/api/guns'
  constructor(private httpClient: HttpClient) { }

  getGuns(){
    return this.httpClient.get(this.endPoint);
  }

  // nuevo
  private name: string = '';
  
  setName(value: string) {
    this.name = value;
  }

  getName(): string {
    return this.name;
  }

  //CARDS
  private selectedCardId: number | null = null;

  setCardId(id: number) {
    this.selectedCardId = id;
  }

  getCardId(): number | null {
    return this.selectedCardId;
  }

  // CREATE
  createGun(gun: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.httpClient.post(this.endPoint, JSON.stringify(gun), {
      headers,
    });
  };


  // DELETE
  delete(id: any){
    return this.httpClient.delete(`${this.endPoint}/${id}`);
  }

  update(id: any, gun: any){

    console.log('id:', id);
    console.log('Datos del arma:', gun);
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.httpClient.put(`${this.endPoint}/${id}`, JSON.stringify(gun), {
      headers,
    });
  }
}
