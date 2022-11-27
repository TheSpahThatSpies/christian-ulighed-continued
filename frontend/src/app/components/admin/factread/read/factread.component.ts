import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-factread',
  templateUrl: './factread.component.html',
  styleUrls: ['./factread.component.scss'],
})
export class FactReadComponent implements OnInit {

  constructor(private service:ApiserviceService) { }

  readData:any;
  successmsg:any;

  ngOnInit() {
    this.loadFactData();
  }

  deleteFactID(id:any)
  {
    console.log(id,'deleteid==>');
    this.service.deleteFactData(id).subscribe((res)=>{
      console.log(res,'deleteres==>');
      this.successmsg = res.message;
      this.loadFactData();

    });
  }

  loadFactData()
  {
    this.service.getAllFactData().subscribe((res)=>{
      console.log(res,"res==>");

      this.readData = res.data;
    });
  }

}