import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {


  @ViewChild('name') nameKey!: ElementRef
  public name : string= ""
  constructor() { }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!
  }

  startQuiz() {
    localStorage.setItem("name",this.nameKey.nativeElement.value)
  }

}
