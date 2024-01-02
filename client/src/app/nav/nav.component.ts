import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements  OnInit {
  model: any = {};

  // currentUser$:  Observable<User | null> = of(null);

  ngOnInit(): void {
    // this.currentUser$ = this.accountService.currentUser$;
  }
  constructor(public accountService : AccountService){

  }


  login(){
    console.log(this.model);
    this.accountService.login(this.model).subscribe({
      next: response =>{
        console.log(response);        
      },
      error: error =>console.log(error),
      complete: () =>{console.log('completed');}
    });
  }

  logout(){
    this.accountService.logout();
    
  }

}
