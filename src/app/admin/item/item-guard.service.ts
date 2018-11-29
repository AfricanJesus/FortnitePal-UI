import {Injectable} from "@angular/core";
import {CanDeactivate} from "@angular/router";
import {ItemEditComponent} from "./edit/item-edit.component";


@Injectable()
export class ItemEditGuard implements CanDeactivate<ItemEditComponent> {
  canDeactivate(component: ItemEditComponent): boolean {
    if (component.itemForm.dirty) {
      let itemName = component.itemForm.get('name').value || "New Item";
      return confirm('Navigate away and lose all changes to ${itemName}?');
    }
    return true;
  }
}
