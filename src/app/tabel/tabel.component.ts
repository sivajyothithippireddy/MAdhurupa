

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { TestService } from '../test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabel',
  templateUrl: './tabel.component.html',
  styleUrls: ['./tabel.component.css']
})
export class TabelComponent implements OnInit {
  e;
  fname;
  dat;
  id;
  obj;
  datar: any;


  constructor(private g: FormBuilder, private ser: TestService,private router:Router,private ht:HttpClient) { }

  tbfm = this.g.group({
    fname: [],
    lname: [],
    pass: [],
    phn: []
  });

  status: boolean = false;
  data1;
  data;
  ngOnInit() {
    this.ser.get().subscribe(res1 => this.data1 = res1)
    console.log("shitty --> res" + this.data1);

  }
  take(e) {
    console.log(e.value);
   
    this.ser.post(e.value).subscribe(res => {
      this.data = res;

      console.log("shitty --> data" + JSON.stringify(this.data));
      if (res) {
        this.ser.get().subscribe(resp => this.data1 = resp)
      }
    });
    this.router.navigateByUrl('client');
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
    location.reload();
  }
  del(e){
     
      console.log("ewsdxfgchuhkgfd",e);
      this.ht.delete("http://localhost:3000/remo+",e).subscribe(resp=>console.log(resp,"deleted data"));
     }
}

