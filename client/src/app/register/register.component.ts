import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  ngOnInit(): void {
    
  }
  constructor(private accountService: AccountService){

  }
  // @Input() usersFromHomeComponent: any;
  @Output() cancelRegister = new EventEmitter();
model: any ={};

register(){
  console.log(this.model);
  this.accountService.register(this.model).subscribe({
    next: response =>{
      console.log(response);
      this.cancel();
    },
    error: error => console.log(error)
  });
}
cancel(){
  console.log('cancelleed');
  this.cancelRegister.emit(false);
}

}
