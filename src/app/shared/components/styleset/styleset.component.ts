import {Component, Input, OnInit} from '@angular/core';

import {StylesetService} from "../../services/styleset.service";
import StyleSetObject = StyleSetModule.StyleSetObject;




@Component({
  selector: 'app-styleset',
  templateUrl: './styleset.component.html',
})
export class StylesetComponent implements OnInit {

  styleSet: StyleSetObject;
  @Input() url: string;


  constructor(private styleSetService: StylesetService) { }

  ngOnInit() {
    this.getStyleSet();
  }

  getStyleSet(){
    this.styleSetService.getStyle(this.url).subscribe(
      (data: StyleSetObject) => { this.styleSet = data},
      err => console.error(err),
      () => console.log('Style Loaded')
    );
  }

  getBackground(type){
    switch (type){
      case 'LEGENDARY':
        return '/images/background/legendary.png';
      case 'EPIC':
        return '/images/background/epic.png';
      case 'RARE':
        return '/images/background/rare.png';
      case 'COMMON':
        return '/images/background/common.png';
      case 'UNCOMMON':
        return '/images/background/uncommon.png';
    }
  }


}
