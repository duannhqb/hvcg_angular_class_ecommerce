import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @Input() userName: any;
  constructor() { 
    console.log('Child constructor');
  }

  ngOnChanges(){
    console.log('Child ngOnChanges');

  }
  ngOnInit(): void {
    console.log('Child ngOnInit');
  }
  ngDoCheck(){
    console.log('Child ngDoCheck');

  }
  ngAfterContentInit(){
    console.log('Child ngAfterContentInit');

  }
  ngAfterContentChecked(){
    console.log('Child ngAfterContentChecked');

  }
  ngAfterViewInit(){
    console.log('Child ngAfterViewInit');

  }
  ngAfterViewChecked(){
    console.log('Child ngAfterViewChecked');

  }
  ngOnDestroy(){
    console.log('Child ngOnDestroy');

  }



}

// lifecycle
//1. initialize, 2. update, 3. destroy