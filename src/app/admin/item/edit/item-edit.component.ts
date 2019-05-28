import {Component, OnInit} from '@angular/core';
import {AppService} from '../../../app.service';
import {FormGroup, Validators, FormBuilder, FormControl, FormArray} from "@angular/forms";
import {ItemService} from "../../../shared/services/item.service";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";

import ItemObject = ItemSingleModule.ItemObject;
import {StylesetService} from "../../../shared/services/styleset.service";
import StyleSetsObject = StyleSetsModule.StyleSetsObject;
import StyleSetObject = StyleSetModule.StyleSetObject;
import StyleSet = StyleSetsModule.StyleSet;


@Component({
  selector: 'app-admin-itemedit',
  templateUrl: './item-edit.component.html'
})
export class ItemEditComponent implements OnInit {

  itemForm: FormGroup;
  item: ItemObject;
  id: number;
  styleSets: StyleSet[];

  constructor(private appService: AppService, private itemSingleService: ItemService, private styleSetService: StylesetService, private fb: FormBuilder, private route: ActivatedRoute) {
    this.appService.pageTitle = 'Edit';
  }

  saveItem(): void {
    let i = Object.assign({}, this.item, this.itemForm.value);
    console.log(i);
    this.itemSingleService.updateItem(i)
      .subscribe(() => this.onSaveComplete());
  }

  onSaveComplete(): void {
    this.itemForm.reset();
  }

  editItem(): void {
    //this.itemSingleService.updateItem(i).subscribe(() => this.onSaveComplete(), (error:any) => this.errorMessage = <any>error)
  }


  ngOnInit(): void {
    this.itemForm = this.fb.group({
      name: ['null', Validators.required],
      desc: ['null', Validators.required],
      rarityType: ['null', Validators.required],
      images: this.fb.array([]),
      animated: ['false', Validators.required],
      traversal: ['false', Validators.required],
      reactive: ['false', Validators.required],
      obtained: this.fb.group({
        season: ['0', Validators.required],
        tier: ['0', Validators.required],
        promo: ['null', Validators.required],
        includedInOutfit: ['null', Validators.required],
        vbuckPrice: ['0', Validators.required],
        price: ['0.00', Validators.required],
        challenge: ['null', Validators.required],
      }),
      styleSet: ['null', Validators.required],
      set: ['null', Validators.required],
      itemType: ['null', Validators.required],
      status: ['null', Validators.required],
    });

    this.itemSingleService.getItem(this.route.snapshot.params.id).subscribe(
      (data: ItemObject) => {
        this.itemRetrieved(data)
      },
      err => console.error(err),
      () => console.log('Data Loaded')
    );

    // this.styleSetService.getStyles("/api/styleSets?size=500").subscribe(
    //   (data: StyleSetsObject) => {
    //     this.styleSets = data._embedded.styleSets;
    //   }, err => console.error(err),
    //   () => {
    //     for (let style of this.styleSets) {
    //       console.log(style.styleSetName);
    //     }
    //   }
    // )
  }

  itemRetrieved(item: ItemObject): void {
    if (this.itemForm) {
      this.itemForm.reset();
    }
    this.item = item;
    this.patchImages();
    this.itemForm.patchValue({
      name: this.item.name,
      desc: this.item.desc,
      rarityType: this.item.rarityType,
      animated: this.item.animated,
      traversal: this.item.traversal,
      reactive: this.item.reactive,
      obtained: {
        season: this.item.obtained.season,
        tier: this.item.obtained.tier,
        promo: this.item.obtained.promo,
        includedInOutfit: this.item.obtained.includedInOutfit,
        vbuckPrice: this.item.obtained.vbuckPrice,
        price: this.item.obtained.price,
        challenge: this.item.obtained.challenge,
      },
      styleSet: this.item.styleSet,
      set: this.item.set,
      itemType: this.item.itemType,
      status: this.item.status,
    });
  }

  patchImages(): void {
    for (var i = 0; i < this.item.images.length; i++) {
      this.addImage();
      this.images.controls[i].setValue(this.item.images[i]);
    }
  }

  createImage(): FormControl {
    return this.fb.control('');
  }

  addImage(): void {
    this.images.push(this.createImage());
  }

  deleteImage(i): void {
    this.images.removeAt(i);
  }

  get images(): FormArray {
    return this.itemForm.get('images') as FormArray;
  }
}
