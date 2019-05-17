import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from "@angular/forms";
import { NgForOf } from '@angular/common';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-archive-loader',
  templateUrl: './archive-loader.component.html',
  styleUrls: ['./archive-loader.component.css']
})
export class ArchiveLoaderComponent implements OnInit {

  myForm: FormGroup;

  public nombre: any;
  public email: any;
  public division: any;
  public seletedFile: any = null;

  constructor(private serviceToConsume: ServiceService) { }

  ngOnInit() {
  }

  onFileSelected(event) {
    console.log(event);
    this.seletedFile = event.target.files[0];
    return this.seletedFile;
  }

  submitForm(empForm: NgForm) {
    this.serviceToConsume.postData(empForm);
    this.serviceToConsume.postFile(this.onFileSelected(event));
    console.log(empForm.value);
  }
}
