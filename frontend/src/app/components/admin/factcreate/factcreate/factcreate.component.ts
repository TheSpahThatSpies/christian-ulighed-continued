import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from 'src/app/apiservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-factcreate',
  templateUrl: './factcreate.component.html',
  styleUrls: ['./factcreate.component.scss'],
})
export class FactCreateComponent implements OnInit {

  constructor(private service:ApiserviceService, private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;

  ngOnInit(): void {
    this.getparamid = this.router.snapshot.paramMap.get('id');
    if(this.getparamid)
    {
      this.service.getSingleFactData(this.getparamid).subscribe((res)=>{
        console.log(res,'res==>');
        this.factForm.patchValue({
          factText:res.data[0].factText
        })
    });
    }

  }

  factForm = new FormGroup({
    'factText':new FormControl('',Validators.required)
  });

  //opret ny bruger
  factSubmit()
  {
    if (this.factForm.valid)
    {
      this.service.createFactData(this.factForm.value).subscribe((res)=>{
        console.log(res,'res==>');
        this.factForm.reset();
        this.successmsg = res.message;
      });
    }
    else
    {
      this.errormsg = 'Missing input'
    }

  }

  //opdater eksisterende bruger
  factUpdate()
  {
    console.log(this.factForm.value,'updatedform');

    if(this.factForm.valid)
    {
      this.service.updateData(this.factForm.value,this.getparamid).subscribe((res)=>{
        console.log(res,'resupdated');
        this.successmsg = res.message;
      });
    }else
    {
      this.errormsg = 'Field cannot be empty.';
    }
  }

}