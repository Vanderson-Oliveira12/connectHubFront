import { Component } from '@angular/core';
import { SearchComponent } from '../../components/search/search.component';
import { ButtonComponent } from '../../components/button/button.component';
import { CardSocialComponent } from '../../components/card-social/card-social.component';
import { CommonModule } from '@angular/common';
import { ICard } from '../../interfaces/ICard';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, ButtonComponent, CardSocialComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  data: ICard[] = [
    {
      email: "joao@example.com",
      name: "João da Silva",
      phone: "+55 11 98765-4321",
      social: "Instagram"
    },
    {
      email: "maria@example.com",
      name: "Maria Santos",
      phone: "+55 21 99876-5432",
      social: "Linkedin"
    },
    {
      email: "pedro@example.com",
      name: "Pedro Oliveira",
      phone: "+55 31 98765-1234",
      social: "Facebook"
    }
  ];


}
