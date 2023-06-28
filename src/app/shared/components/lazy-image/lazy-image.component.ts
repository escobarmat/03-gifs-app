import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html'
})
export class LazyImageComponent implements OnInit {

  @Input()
  public url!:string;

  @Input()
  public alt:string = '';

  @Input()
  public heightImg!: string;

  @Input()
  public widthImg!: string;

  public hasLoaded: boolean = false;


  ngOnInit(): void {
    if(!this.url) throw new Error('URL property is required');
  }

  height():number{

    let relationImg:number = parseInt(this.widthImg)/parseInt(this.heightImg);

    return (relationImg);
  }

  onLoad(){
    console.log('Image Loaded');
    this.hasLoaded = true;
  }

}
