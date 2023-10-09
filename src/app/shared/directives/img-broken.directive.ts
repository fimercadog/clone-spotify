import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @Input() customImg:string='';
  @HostListener('error') handError():void{
    const elNative=this.elHost.nativeElement;
    // console.log('🔴 esta imagen revento -->',this.elHost);
    elNative.src='../../../../assets/images/img-broken.jpg';
  }

  constructor(private elHost:ElementRef) {
    // console.log(this.elHost);
  }

}
