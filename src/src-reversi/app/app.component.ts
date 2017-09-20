import { Component, OnInit } from '@angular/core';

class Cell {
  cellStatus: '';
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hello';
  white = 0;
  black = 0;
  cells:Cell[] = [];
  constructor(){}

  ngOnInit() {
    for(let i = 0; i < 64; i++) {
      this.cells.push({cellStatus: ''});
    }
    console.log(this.cells);
  }
  
  cellClick(ind:number) {
  }
}
