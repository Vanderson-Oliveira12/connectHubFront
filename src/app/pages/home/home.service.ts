import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  modalDeleteOpened$ = new EventEmitter<boolean>();

  handleOpenModalDelete() {
    this.modalDeleteOpened$.emit(true);
  }

  handleCloseModalDelete() {
    this.modalDeleteOpened$.emit(false);
  }
}
