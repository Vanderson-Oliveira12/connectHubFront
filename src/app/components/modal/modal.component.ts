import { Component, Input } from '@angular/core';
import { HomeService } from '../../pages/home/home.service';
import { ICard } from '../../interfaces/ICard';
import { ContactService } from '../../pages/contact/contact.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

  @Input() data: ICard = {
    _id: '',
    email: '',
    name: '',
    phone: '',
    category: '',
  };

  constructor(private homeService: HomeService, private contactService: ContactService) {

  }

  handleCloseModal() {
    this.homeService.handleCloseModalDelete();
  }

  handleDeleteContact() {
    if(this.data._id) {
      this.contactService.handleDeletContact(this.data._id).subscribe({})
    }
  }

}
