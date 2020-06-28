
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../../../users.service';
import { Router } from '@angular/router';
import { UsersData } from './../../../models/users.model';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  usersEntry : UsersData

  onSubmit(form: NgForm){
    this.usersEntry = form.form.value;
    console.log(this.usersEntry);
    // console.log(f.value);
    // console.log(f.valid);
    this.usersService.addEntry(this.usersEntry).subscribe(response => {
      console.log(response);
      this.router.navigate(['/dashboard']);
    })
  }
}
