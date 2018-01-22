import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GuiterService } from './guiter.service';
import { AppComponent } from './app.component';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { GuiterlistComponent } from './guiterlist/guiterlist.component';
import { PurchaseComponent } from './purchase/purchase.component';
import{ RouterModule,Routes } from '@angular/router';
import{ HttpModule } from '@angular/http';
import { GuiterdetailComponent } from './guiterdetail/guiterdetail.component';
import { PurchasebuyComponent } from './purchasebuy/purchasebuy.component';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeNavComponent,
    GuiterlistComponent,
    PurchaseComponent,
    GuiterdetailComponent,
    PurchasebuyComponent,
  //   
  ],
  imports: [
    BrowserModule,HttpModule, 
    FormsModule,
    RouterModule.forRoot([
          { path: 'purchase/:index', component: GuiterdetailComponent },
           { path: 'orderdetail/:abc', component: PurchasebuyComponent }
           
          
           
          
           
       ]) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
