import { Component, OnInit } from '@angular/core';
import { GuiterService } from '../guiter.service';
import{ ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-guiterlist',
  templateUrl: './guiterlist.component.html',
  styleUrls: ['./guiterlist.component.css'],
  providers: [GuiterService]
})
export class GuiterlistComponent implements OnInit {
 guiterimagelists=[];
 index=0;
 guiterDetail=[];
 details=[];
 messa=false;
  
 constructor(private guiterservice: GuiterService,private router:Router) { }

 ngOnInit() { 
    this.guiterservice.GuiterServiceData()
    .subscribe((response)=>{for(let i in response)
      {this.guiterimagelists.push(response[i]);
    this.guiterDetail.push(response[i]['customer_review']);
    console.log(response);
   // console.log(response[i][0]['image_path']);
  //  this.details.push(this.guiterDetail[i].split(";"))
 }; });
  console.log(this.guiterDetail);
  console.log(this.guiterimagelists);
  console.log(this.details);
  console.log();
}
  nextPic()
  {
   this.index++;
   if(this.index>6)
   {
     this.index=0;
   }
 }

 prevPic()
 {
   this.index--;
   if(this.index<0)
   {
     this.index=6;
   }
 }
 buy(a)
 {
   this.router.navigate(["/purchase",a]);
   //console.log("hiiiiii");
   this.messa=false;
   console.log(this.index);
 }
//  clicktobuy()
//  {
// this.messa=true;
//  }

  }
  

  
  
     
  

