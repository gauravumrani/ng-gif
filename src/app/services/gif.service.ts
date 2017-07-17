import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class GifService {
	constructor(private http:Http) { }

	getTrending(){
		return this.http.get(`https://api.tenor.com/v1/trending?key=UMH7AAOIAOP3`)
		.map(res=>res.json());
	}
	getAutoSuggestion(keyword){
		return this.http.get(`https://api.tenor.com/v1/autocomplete?key=UMH7AAOIAOP3&limit=15&tag=`+keyword)
		.map(res=>res.json());
	}
	searchGIF(item){
		return this.http.get(`https://api.tenor.com/v1/search?key=UMH7AAOIAOP3&tag=`+item)
		.map(res=>res.json());
	}

	hourlyTrends(){
		return this.http.get(`https://api.tenor.com/v1/autocomplete?type=trending&key=UMH7AAOIAOP3`)
		.map(res=>res.json());
	}

}
