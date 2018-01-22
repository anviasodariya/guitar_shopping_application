import { Component, OnInit ,Input} from '@angular/core';
import{ ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css'],
  
})
export class PurchaseComponent implements OnInit {
firstname:string;
lastname:string;
cc:any;
email:string;
message=false;
index=0;
messa=false;
msg=true;
@Input() abc
constructor(private router:Router) { }


ngOnInit() {
 
  
}

onSubmit(value: any)
{
  console.log(value);
}
object={"firstname":"","lastname":"","cc":"","email":""};

buy(a)
{
  this.router.navigate(["/orderdetail",a]);
  //console.log("hiiiiii");
  this.messa=false;
  console.log(this.index);
}

  // gotoreview()
  // {
  //   this.message=true;
  //   var object={"firstname":this.firstname,"lastname":this.lastname,"cc":this.cc,"email":this.email}
  // 	this.object;
  // }

}
