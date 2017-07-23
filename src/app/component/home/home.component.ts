import { Component, OnInit,Input,OnChanges } from '@angular/core';
import {GifService} from '../../services/gif.service';
import { ClipboardService } from 'ng2-clipboard/ng2-clipboard';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit ,OnChanges{
	@Input()
	mydata:string;
	search_home="";
	gif_data;
	heading="Trending";
	showGIF=false;
	constructor(private gif:GifService,private clipboard: ClipboardService) { }

	ngOnInit() {
		this.search_home=this.mydata;
		this.gif.getTrending().subscribe(data=>{
			this.gif_data=data.results;
		});
		this.ShowGif();
	}
	ngOnChanges() {
		this.search_home=this.mydata;
		if(this.search_home!=undefined  && this.search_home!==""){
			console.log("here");
			this.searchgif(this.search_home);
			this.ShowGif();
		}
	}
	shareFB(url){
		window.open(
			'http://www.facebook.com/sharer.php?u='+url,
			'facebook-share-dialog', 
			'width=626,height=436'
			); 
	}
	searchgif(item){
		this.showGIF=false;
		this.gif.searchGIF(item)
		.subscribe(data=>{
			this.gif_data=data.results;
			this.heading=`Your Search "${item}"`;
		});
	}
	ShowGif(){
		let root=this;
		setTimeout(function(){
			root.showGIF=true;
		},3000);
	}
	viewGif(gif_url,image){
		image.src=gif_url;
	}
	removeGif(img_url,image){
		image.src=img_url;
	}
	copyGif(gif_url){
		this.clipboard.copy(gif_url);
		alert('URL Copied' +gif_url);
	}
}
