import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestService } from '../test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  fname: any;
  dat: any;
  id: any;
  obj;

  constructor(private ht:HttpClient,private ser:TestService,private router:Router) { }
data1;
  ngOnInit() {
    console.log
    this.ser.get().subscribe(res1 => {
      console.log(res1)
      this.data1 = res1})
  }
 
  grab(a) {
    console.log("grab--------->" + a);
    this.fname = a.fname;
    this.dat = a;
    this.id = a.id;
  }
  uppit(a) {
    console.log("uppit--------->" + a);
    this.obj = { 'id': this.id, 'fname': a, 'lname': this.dat.lname }
    console.log(this.obj);
    console.log("grab--------->");
    this.ser.chan(this.obj).subscribe(res => {
      console.log(res)
      this.ser.get().subscribe(res => this.data1 = res)
    });
  }
  cre(){
    this.router.navigateByUrl('tabel');

  }
  del(e){
     
      console.log("ewsdxfgchuhkgfd",e);
      this.ht.delete("http://localhost:3000/remo/"+e.id).subscribe(resp=>{console.log(resp,"deleted data")
      if(resp){
        this.ser.get().subscribe(res => this.data1 = res)
      }});
     }
}
