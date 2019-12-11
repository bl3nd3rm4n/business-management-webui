import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  link: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'Profile', cols: 3, rows: 2, color: 'lightblue', link: '/dashboard/profile-page'},
    {text: 'Reports', cols: 1, rows: 4, color: 'lightgreen', link: ''},
    {text: 'Playground', cols: 1, rows: 2, color: 'lightpink', link: '/playground'},
    {text: 'Settings', cols: 2, rows: 2, color: '#DDBDF1', link: ''},
    {text: 'Relu #1 Manager ma boy bodan', rows: 2, cols: 4, color: 'lightyellow', link: ''}
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  logout() {
    console.log('You ve been logout');
    this.router.navigate(['/login']);
  }

}
