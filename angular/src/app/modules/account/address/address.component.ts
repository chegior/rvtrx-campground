import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Address } from '../../../data/address.model';
import { GenericEditingService } from '../../../services/editable/generic-editing.service';
import { EditedAccount } from 'src/app/data/edited-account.type';

@Component({
  selector: 'uic-address',
  templateUrl: './address.component.html',
})
/**
 * Class representing a user's address
 */
export class AddressComponent implements OnInit {
  constructor(private readonly editingService: GenericEditingService<EditedAccount>) {}
  @Input() address: Address;
  @Output() addressEdited = new EventEmitter();
  editMode = false;
  titleEdit = 'Click To Edit Your Address';

  ngOnInit(): void {}

  /**
   * Updates the _Editing Service_ with the new address information
   */
  edited() {
    this.editingService.update({ address: this.address });
  }
}
