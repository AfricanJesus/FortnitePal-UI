import {Component, Input, OnInit} from '@angular/core';

import {StylesetService} from "../../services/styleset.service";
import StyleSetObject = StyleSetModule.StyleSetObject;
import {environment} from "../../../../environments/environment.prod";




@Component({
  selector: 'app-styleset',
  templateUrl: './styleset.component.html',
})
export class StylesetComponent implements OnInit {

  styleSet: StyleSetObject;
  @Input() url: string;
  baseImageUrl = environment.baseImageUrl;
  baseAPIUrl = environment.baseAPIUrl;


  constructor(private styleSetService: StylesetService) { }

  ngOnInit() {
    this.getStyleSet();
  }

  getStyleSet(){
    console.log(this.baseAPIUrl + this.url);
    this.styleSetService.getStyle(this.baseAPIUrl + this.url).subscribe(
      (data: StyleSetObject) => { this.styleSet = data},
      err => console.error(err),
      () => console.log('Style Loaded')
    );
  }

  getBackground(type) {
    switch (type) {
      case 'LEGENDARY':
        return this.baseImageUrl + '/images/background/legendary.png';
      case 'EPIC':
        return this.baseImageUrl + '/images/background/epic.png';
      case 'RARE':
        return this.baseImageUrl + '/images/background/rare.png';
      case 'COMMON':
        return this.baseImageUrl + '/images/background/common.png';
      case 'UNCOMMON':
        return this.baseImageUrl + '/images/background/uncommon.png';
    }
  }


}
