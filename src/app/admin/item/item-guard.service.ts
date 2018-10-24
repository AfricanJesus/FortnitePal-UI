import {Injectable} from "@angular/core";
import {CanDeactivate} from "@angular/router";
import {ItemeditComponent} from "./itemedit.component";


@Injectable()
export class ItemEditGuard implements CanDeactivate<ItemeditComponent> {
  canDeactivate(component: ItemeditComponent): boolean {
    if (component.itemForm.dirty) {
      let itemName = component.itemForm.get('name').value || "New Item";
      return confirm('Navigate away and lose all changes to ${itemName}?');
    }
    return true;
  }
}
