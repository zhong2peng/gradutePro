import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor-dn',
  templateUrl: './editor-dn.component.html',
  styleUrls: ['./editor-dn.component.css']
})
export class EditorDnComponent implements OnInit {
  text1: string = '<div>Hello World!</div><div>PrimeNG <b>Editor</b> Rocks</div><div><br></div>';
  text2: string;
  constructor() { }

  ngOnInit() {
  }

}
