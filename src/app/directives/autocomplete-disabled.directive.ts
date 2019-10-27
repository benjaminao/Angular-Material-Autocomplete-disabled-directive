  import { Directive, ElementRef, OnInit, Input, HostListener } from '@angular/core';

  @Directive({
    selector: '[autocompleteDisabled]'
  })
export class AutocompleteDisabledDirective implements OnInit {
  @Input() index;
  @Input() isDisabled = true;
  name: string;
  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.name = this.el.nativeElement.name;
    this.getRandomName(5);
  }

  getRandomName(length) {
    console.log('isDisabled ', this.isDisabled);
    if (this.isDisabled) {
      let randomName = '';
      const name = this.el.nativeElement.name;
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      for ( let i = 0; i < length; i++ ) {
        randomName += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      const uniqueName = `${this.index}-${randomName}`;
      this.el.nativeElement.autocomplete = uniqueName;
      this.el.nativeElement.name = uniqueName;
    } else {
      this.el.nativeElement.name = this.name;
    }
    setTimeout(() => {
      this.getRandomName(5);
    }, (100));
  }

}
