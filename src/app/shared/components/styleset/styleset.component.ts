import {Component, Input, OnInit} from '@angular/core';

import {StylesetService} from "../../services/styleset.service";
import StyleSetObject = StyleSetModule.StyleSetObject;
import {environment} from "../../../../environments/environment";




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
        return environment.legendaryBackground;
      case 'EPIC':
        return environment.epicBackground;
      case 'RARE':
        return environment.rareBackground;
      case 'COMMON':
        return environment.commonBackground;
      case 'UNCOMMON':
        return environment.uncommonBackground;
    }
  }

}
