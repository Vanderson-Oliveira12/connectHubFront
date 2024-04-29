import { Component, Input } from '@angular/core';
import { ICard } from '../../interfaces/ICard';

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
    social: '',
  };

}
