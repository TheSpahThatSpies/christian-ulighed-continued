import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],
})
export class ReadComponent implements OnInit {

  constructor(private service:ApiserviceService) { }

  readData:any;
  successmsg:any;

  ngOnInit() {
    this.service.getAllData().subscribe((res)=>{
      console.log(res,"res==>");

      this.readData = res.data;
    });
  }

  deleteID(id:any)
  {
    console.log(id,'deleteid==>');
    this.service.deleteData(id).subscribe((res)=>{
      console.log(res,'deleteres==>');
      this.successmsg = res.message;
    });
  }

}
