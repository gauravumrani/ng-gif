import { Component ,OnInit} from '@angular/core';
import {GifService} from './services/gif.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  search:string="";
  showSug=false;
  result=[];
  searchVal:string;
  constructor(private gif:GifService){

  }
  ngOnInit(){

  }

  getSug(){
  	this.gif.getAutoSuggestion(this.search)
  	.subscribe(data=>{
  		this.result=data.results;
  		if(this.result.length>0){
  			this.showSug=true;
  		}
  		if(this.result.length==0 || this.result[0]=="love"){
  			this.showSug=false;
  		}
  	});
  	//alert(this.search);
  }
  srch(item){
  	this.searchVal=item;
  }
}
