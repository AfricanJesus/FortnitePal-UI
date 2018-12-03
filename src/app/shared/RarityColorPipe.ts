import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'raritycolor'})
export class RarityColorPipe implements PipeTransform {

  transform(rarityType: string) {
    switch (rarityType) {
      case 'LEGENDARY':
        return '#FAA763';
      case 'EPIC':
        return '#D65AFA';
      case 'RARE':
        return '#3EBAED';
      case 'COMMON':
        return '#A0A7AD';
      case 'UNCOMMON':
        return '#7BCC41';
    }

  }
}
