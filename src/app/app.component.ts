import { Component, OnInit } from '@angular/core';
import { TestserviceService } from './testservice.service';
import {Data} from './data';
import { stringify } from '@angular/core/src/render3/util';
import { Vacations } from './vacations';
import { Destinations } from './destinations';
import { Itineraries } from './itineraries';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', ]
})
export class AppComponent implements OnInit 
 {
  public  data:Data;
  
  vacations:Vacations[] = [];
  destinations:Destinations[] = [];
  itenaries:Itineraries[] = [];

  itenarytext:any[] = [];

  sorted:any[] = [];
  cars = ['A',"B", "C", "D","E", "F", "G","H", "I", "J",'K',"L", "M", "N","O", "P", "Q","R", "S", "T","U","V", "W", "X","Y","Z"];
  map = new Map<String, String[]>();
  
 

  constructor( private testService:TestserviceService) {

    
    
}
ngOnInit()
{

  
   
  
    
    
    

  
 
  this.testService.getData().subscribe(
    resp => {
     
     this.data= resp;

     console.log(this.data.itineraries);

     console.log(this.data);

     this.data.itineraries.forEach((item) => {

this.itenarytext.push(item.text);
      

      });

    console.log(this.itenarytext);
    
   

    this.sorted = this.itenarytext.sort((a, b) => b < a ? 1: -1);
    console.log(this.sorted);

      
     
    var startswith = this.sorted.filter((item) => item.startsWith("A"));

    console.log(startswith);

    var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for(var i=0; i<str.length; i++)
    {
       var key = str[i];
       
        

       var value = this.sorted.filter((item) => item.startsWith(key));
      console.log(value);
     this.map.set(key, value );
    }
    /*this.map.forEach((value: String[], key: String) => {
      console.log(key, value[0]);
  });*/
     
      }  );

     
      var yourNavigation = $("nav");
      var stickyDiv = "sticky";
     var  yourHeader = $('.header').height();
    
    $(window).scroll(function() {
    if( $(this).scrollTop() > yourHeader ) {
      yourNavigation.addClass(stickyDiv);
    } else {
      yourNavigation.removeClass(stickyDiv);
    }
    });
      
}



	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

 }

 