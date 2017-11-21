import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../environments/environment';

@Injectable()
export class AppService {

	baseUrl = environment.apiServer;

	getAllArtists() {
		return this.http.get(`${this.baseUrl}/api/artists`);
	}

  constructor(private http: Http) { }

}
