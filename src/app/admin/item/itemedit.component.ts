import {Component, OnInit} from '@angular/core';

import {AppService} from '../../app.service';
import {FormGroup, Validators, FormBuilder} from "@angular/forms";
import {ItemSingleService} from "../../shared/services/itemsingle.service";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import RootObject = ItemSingleModule.RootObject;


@Component({
  selector: 'app-admin-itemedit',
  templateUrl: './itemedit.component.html'
})
export class ItemeditComponent implements OnInit {

  itemForm: FormGroup;
  item: RootObject;
  id: number;

  constructor(private appService: AppService, private itemSingleService: ItemSingleService, private fb: FormBuilder, private route: ActivatedRoute) {
    this.appService.pageTitle = 'Edit';
  }

  save() {
    console.log(this.itemForm);
    if (this.itemForm.valid) {
      this.itemSingleService.createItem(this.itemForm.value).subscribe(
        data => {
          this.itemForm.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      )
    } else {
      console.log("asd");
    }
  }

  ngOnInit(): void {
    this.itemForm = this.fb.group({
      name: ['null', Validators.required],
      desc: ['null', Validators.required],
      rarityType: ['null', Validators.required],
      images: [''],
      obtained: this.fb.group({
        season: ['0', Validators.required],
        tier: ['0', Validators.required],
        promo: ['null', Validators.required],
        includedInName: ['null', Validators.required],
        vbuckPrice: ['0', Validators.required],
        price: ['0.00', Validators.required],
        challenge: ['null', Validators.required],
      }),
      styleSet: ['null', Validators.required],
      set: ['null', Validators.required],
      itemType: ['null', Validators.required],
      status: ['null', Validators.required],
    });
    // if(this.id == 0){
    //   Observable.create((observer: any) => {
    //     observer.next(this.initializeItem());
    //     observer.complete();
    //     }
    //   )
    // }else
    {
      this.itemSingleService.getItem(this.route.snapshot.params.id).subscribe(
        (data: RootObject) => {
          this.itemRetrieved(data)
        },
        err => console.error(err),
        () => console.log('Data Loaded')
      );
    }
  }

  itemRetrieved(item: RootObject): void {
    if (this.itemForm) {
      this.itemForm.reset();
    }
    this.item = item;

    this.itemForm.patchValue({
      name: this.item.name,
      desc: this.item.desc,
      rarityType: this.item.rarityType,
      images: this.item.images,
      obtained: {
        season: this.item.obtained.season,
        tier: this.item.obtained.tier,
        promo: this.item.obtained.promo,
        includedInName: this.item.obtained.includedInName,
        vbuckPrice: this.item.obtained.vbuckPrice,
        price: this.item.obtained.price,
        challenge: this.item.obtained.challenge,
      },
      styleSet: this.item.styleSet,
      set: this.item.set,
      itemType: this.item.itemType,
      status: this.item.status,
    })
  }

  initializeItem(): RootObject {
    return {
      id: null,
      name: null,
      desc: null,
      rarityType: null,
      images: null,
      obtained: null,
      styleSet: null,
      set: null,
      itemType: null,
      status: null,
      _links: null
    };
  }

}
