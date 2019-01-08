import {Component, Input, OnInit} from '@angular/core';
import {ChallengesetService} from "../../services/challengeset.service";

import ChallengeSetObject = ChallengeSetModule.ChallengeSetObject;
import {environment} from "../../../../environments/environment";


@Component({
  selector: 'app-challengeset',
  templateUrl: './challengeset.component.html',
})
export class ChallengesetComponent implements OnInit {

  challengeSet: ChallengeSetObject;
  @Input() url: string;
  @Input() rarity: string;
  baseImageUrl = environment.baseImageUrl;


  constructor(private challengeSetService: ChallengesetService) { }

  ngOnInit() {
    this.getChallenges();
  }

  getChallenges(){
    this.challengeSetService.getChallenges(this.url).subscribe(
      (data: ChallengeSetObject) => { this.challengeSet = data},
      err => console.error(err),
      () => console.log('Challenge Set Loaded')
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
