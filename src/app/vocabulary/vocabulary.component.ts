import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { data } from '../data';

@Component({
    selector: 'app-vocabulary',
    templateUrl: './vocabulary.component.html',
    styleUrls: ['./vocabulary.component.scss'],
  })
  export class VocabularyComponent implements AfterViewInit {
    @ViewChild('tableV') elementRef: any;
    dataV = [];
  
    ngAfterViewInit() {
      this.dataV = localStorage.getItem('lg-dataV') ? JSON.parse(localStorage.getItem('lg-dataV') || '[]') : data['lg-dataV'];
  
      this.elementRef.nativeElement.data = this.dataV;
      this.elementRef.nativeElement.onCellUpdate = (cellUpdate: any) => { console.log(cellUpdate); };
      this.elementRef.nativeElement.onDataUpdate = (dataUpdate: any) => {
        console.log(dataUpdate);
      };
  
  
    }
  
    save() {
      
      localStorage.setItem('lg-dataV', JSON.stringify(this.elementRef.nativeElement.getData()))
    }
  }
  