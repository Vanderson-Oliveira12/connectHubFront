import { Component, OnInit } from '@angular/core';
import { SearchComponent } from '../../components/search/search.component';
import { ButtonComponent } from '../../components/button/button.component';
import { CardSocialComponent } from '../../components/card-social/card-social.component';
import { CommonModule } from '@angular/common';
import { ICard } from '../../interfaces/ICard';
import { ModalComponent } from '../../components/modal/modal.component';
import { modalAnimation } from '../../animation/modal';
import { HomeService } from './home.service';
import { ContactService } from '../contact/contact.service';
import { Router } from '@angular/router';
import { LoadingComponent } from '../../components/loading/loading.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, ButtonComponent, CardSocialComponent, CommonModule, ModalComponent, LoadingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [modalAnimation]
})
export class HomeComponent implements OnInit {

  isLoading: boolean = false;
  hasError: boolean = false;
  contactsList: ICard[] = [];

  cardByDelete!: ICard;
  isModalOpened: boolean = false;

  constructor(private homeService: HomeService, private contactService: ContactService, private router: Router) { }

  ngOnInit(): void {
    this.homeService.modalDeleteOpened$.subscribe(status => {
      this.isModalOpened = status;
    })

    this.handleGetContacts();
  }

  handleGetContacts() {
    this.isLoading = true;
    this.contactService.handleGetAllContacts().subscribe({
      next: (contacts: ICard[]) => {
        this.contactsList = contacts;
        this.isLoading = false;
        this.hasError = false;
      },
      error: (err) => {
        this.isLoading = false;
        this.hasError = true;
      }
    })
  }

  handleRedirect() {
    this.router.navigate(['contact'])
  }

}
