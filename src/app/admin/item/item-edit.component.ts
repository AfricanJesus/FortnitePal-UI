import {Component, OnInit} from '@angular/core';
import {AppService} from '../../app.service';
import {FormGroup, Validators, FormBuilder, FormControl, FormArray} from "@angular/forms";
import {ItemService} from "../../shared/services/item.service";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";


import ItemObject = ItemSingleModule.ItemObject;


@Component({
  selector: 'app-admin-itemedit',
  templateUrl: './item-edit.component.html'
})
export class ItemEditComponent implements OnInit {

  itemForm: FormGroup;
  item: ItemObject;
  id: number;

  constructor(private appService: AppService, private itemSingleService: ItemService, private fb: FormBuilder, private route: ActivatedRoute) {
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
    {
      this.itemSingleService.getItem(this.route.snapshot.params.id).subscribe(
        (data: ItemObject) => {
          this.itemRetrieved(data)
        },
        err => console.error(err),
        () => console.log('Data Loaded')
      );
    }
  }

  itemRetrieved(item: ItemObject): void {
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

  createImage(): FormControl {
    return this.fb.control({image: ['']});
  }

  get images(): FormArray {
    return <FormArray>this.itemForm.get('images');
  }

  // initializeItem(): RootObject {
  //   return {
  //     id: null,
  //     name: null,
  //     desc: null,
  //     rarityType: null,
  //     images: null,
  //     obtained: null,
  //     styleSet: null,
  //     set: null,
  //     itemType: null,
  //     status: null,
  //     _links: null
  //   };
  // }

}
