import {Component} from "@angular/core";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'background',
  // imports: [
  //   NgOptimizedImage
  // ],
  styles: `
    .bg-container{
      position: absolute;
      height: 100svh;
      width: 100svw;
      z-index: -1000;
      top: 0;
      left: 0;
    }

    img{
      object-fit: cover !important;
    }

    .preload{
      height: 0;
      width: 0;
    }
  `,
  template: `<div class="bg-container"><img class='bg' ngSrc="{{this.lazyLoadingStages[this.loadedStage]}}" fill/> <img class='preload' ngSrc="{{lazyLoadingStages[preloadingStage]}}" fill (load)="next(preloadingStage)"/></div>`
})
export class BackgroundComponent {
  lazyLoadingStages = [
    'bg-0.jpg',
    'bg-1.jpg',
    'bg-2.jpg'
  ]
  loadedStage = 0;
  preloadingStage = 0;


  next(preloadedStage: number){
    console.log('preload next')
    this.loadedStage = preloadedStage;
    this.preloadingStage = this.lazyLoadingStages.length - 1 > preloadedStage ? preloadedStage + 1 : preloadedStage;
  }
}
