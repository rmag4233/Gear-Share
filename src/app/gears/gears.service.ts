import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class GearsService {

  getUserToken() {
    return this.auth.user.token
  }

  getOneGear(gearId) {
		return this.http.get(environment.apiServer + '/gears/' + gearId);
	}

  saveGear(title: string, description: string, price: string, availability: string, image_URL: string) {
    let gear = {
      'gear': {
        'title': title,
        'description': description,
        'price': price,
        'availability': availability,
        'image_URL': image_URL
      }
    }
    let config = {}
    config['headers'] = { Authorization: 'Token token=' + this.getUserToken()}
		return this.http.post(environment.apiServer + '/gears', gear, config);
	}

  getAllGears() {
    return this.http.get(environment.apiServer + '/gears')
  }

  updateGear(title: string, description: string, price: string, availability: string, image_URL: string, id) {
    let gear = {
      'gear': {
        'title': title,
        'description': description,
        'price': price,
        'availability': availability,
        'image_URL': image_URL
      }
    }
    let config = {}
    config['headers'] = { Authorization: 'Token token=' + this.getUserToken()}
    return this.http.patch(environment.apiServer + '/gears/' + id, gear, config)
  }

  deleteGear(gear) {
    let config = {}
    config['headers'] = { Authorization: 'Token token=' + this.getUserToken()}
    return this.http.delete(environment.apiServer + '/gears/' + gear.id, config)
  }

  constructor(private http: Http, public auth : AuthService) { }

}
