import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class GearsService {

  getOneGear(gearId) {
		console.log(gearId);
		return this.http.get(environment.apiServer + '/gears/' + gearId);
	}

  constructor(private http: Http) { }

}
