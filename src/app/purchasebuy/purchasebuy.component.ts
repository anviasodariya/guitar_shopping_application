
import { Component, OnInit } from '@angular/core';
import { GuiterService } from '../guiter.service';
import{ ActivatedRoute, Router  } from '@angular/router';
@Component({
  selector: 'app-purchasebuy',
  templateUrl: './purchasebuy.component.html',
  styleUrls: ['./purchasebuy.component.css'],
  providers: [GuiterService]
})
export class PurchasebuyComponent implements OnInit {

  constructor(private guiterservices: GuiterService, private route:ActivatedRoute,private router:Router) { }

  finalguiterimage=[];
  index;
  abc;
  ngOnInit() {
    this.guiterservices.GuiterServiceData()
    .subscribe((response)=>{for(let i in response)
      {this.finalguiterimage.push(response[i]);
    
  }
  
  });
  this.abc=this.route.snapshot.params['abc'];
  }
  
}
