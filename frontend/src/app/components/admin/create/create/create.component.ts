import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {

  constructor(private service:ApiserviceService) { }

  errormsg:any;

  ngOnInit(): void {}

  userForm = new FormGroup({
    'name':new FormControl('',Validators.required),
    'email':new FormControl('',Validators.required),
    'mobile':new FormControl('',Validators.required)
  });

  userSubmit()
  {
    if (this.userForm.valid)
    {
      console.log(this.userForm.value);
    }
    else
    {
      this.errormsg = 'Missing input'
    }

  }

}