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
  hourTrends:any;
  constructor(private gif:GifService){

  }
  ngOnInit(){
    this.gif.hourlyTrends().subscribe(data=>{
      this.hourTrends=data.results;
      console.log(this.hourTrends);
    });
  }

  getSug(event){
    if(event.keyCode==13){
      this.searchVal=this.search;
    }
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
  srchHourTrends(item){
    this.searchVal=item;
  }
}
