import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Users } from '../class/class.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private service:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  addvalidation(myform:any){
    let newlogin:Users={
      UserName:"",
      Role:"",
      Password:""
    }
    if(newlogin.UserName=="User" && newlogin.Role=="Admin" && newlogin.Password=="Admin@123"){
      this.router.navigate(['lead']);
   
    }
    else{
    this.service.validateUser(newlogin.UserName, newlogin.Role, newlogin.Password).subscribe((isValid: any) => {
      if (isValid) {
        // Login successful
        this.router.navigate(['/leadview/'+this.service.register])
        // Implement your login success logic here
      } else {
        // Login failed
        //this.router.navigate(['Login'])
        this.errormessage();
        // Implement your login failure logic here
      }
    });}
  }errormessage() {
  throw new Error('Method not implemented.');
}
onRegister() {
  this.router.navigate(['/lead']);

}}