import { Component, OnInit } from '@angular/core';
import { GuiterService } from '../guiter.service';
import{ ActivatedRoute, Router  } from '@angular/router';
@Component({
  selector: 'app-guiterdetail',
  templateUrl: './guiterdetail.component.html',
  styleUrls: ['./guiterdetail.component.css'],
  providers: [GuiterService]
})
export class GuiterdetailComponent implements OnInit {
  constructor(private guiterservices: GuiterService, private route:ActivatedRoute) { }

guiterimage=[];
index;
ngOnInit() {
  this.guiterservices.GuiterServiceData()
  .subscribe((response)=>{for(let i in response)
    {this.guiterimage.push(response[i]);
  
}

});
this.index=this.route.snapshot.params['index'];
}
}


