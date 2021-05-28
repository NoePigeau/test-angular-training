import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations:[
    trigger('headerAnimation' , [
      state('inactive' , style({
        transform: 'scale(1)'
      })),
      state('active' , style({
        transform: 'scale(1.5)'
      })),
      transition('active <=> inactive' , animate('500ms 100ms ease-in-out'))     
  ])

  ]
})
export class HeaderComponent implements OnInit {

  headerState = 'inactive';
  textAlign ="center";
  header = 'baseAngular';
  background = '#f5f6fa';
  title = 'gestion des relations clients';

  constructor() { }

  ngOnInit(): void {
  }

  animateHeader(){
    this.headerState = (this.headerState === 'inactive' ? 'active' : 'inactive');
  }


}
