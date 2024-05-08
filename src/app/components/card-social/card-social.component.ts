import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICard } from '../../interfaces/ICard';
import { HomeService } from '../../pages/home/home.service';

@Component({
  selector: 'app-card-social',
  standalone: true,
  imports: [],
  templateUrl: './card-social.component.html',
  styleUrl: './card-social.component.scss',
})
export class CardSocialComponent {

  @Input() data: ICard = {
    email: '',
    name: '',
    phone: '',
    category: '',
  };

  @Output() cardByDelete = new EventEmitter<ICard>();

  constructor(private homeService: HomeService) { }


  handleDeleteContact() {
    this.homeService.handleOpenModalDelete();
    this.cardByDelete.emit(this.data);
  }

}
