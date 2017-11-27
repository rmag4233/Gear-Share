import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class GearsService {

  getOneGear(gearId) {
		return this.http.get(environment.apiServer + '/gears/' + gearId);
	}

  saveGear(title: string, description: string, price: string, availability: boolean, image_URL: string) {
		console.log('title being sent to api is ', title);
    let gear = {
      'gear': {
        'title': title,
        'description': description,
        'price': price,
        'availability': availability,
        'image_URL': image_URL
      }
    }
		return this.http.post(environment.apiServer + '/gears', gear);
	}

  getAllGears() {
    return this.http.get(environment.apiServer + '/gears')
  }

  constructor(private http: Http) { }

}
