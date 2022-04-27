import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-route6',
  templateUrl: './route6.component.html',
  styleUrls: ['./route6.component.scss']
})
export class Route6Component implements OnInit, OnDestroy {

  public totalDivs: number = 0;
  private offset: number = 20;
  private scrollEvent;
  constructor(
    private renderer2: Renderer2
  ) { }

  ngOnInit(): void {
    this.divsGenerator();
    this.scrollEvent = (ev) => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        this.divsGenerator();
      }
    };
    window.addEventListener('scroll', this.scrollEvent);
  }


  divsGenerator() {
    for (let count = 1; count <= this.offset; count++) {
      this.totalDivs++;
      let divBox = this.renderer2.createElement('div');
      divBox.className = 'divBox';
      divBox.innerHTML = `<button onclick="alert('Button ${this.totalDivs} is clicked')">Click!</button>`;
      this.renderer2.appendChild(document.querySelector('#mainWrapper'), divBox);
    }
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollEvent)
  }

}
