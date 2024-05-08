import { Component, OnDestroy, OnInit } from '@angular/core';
import { InputComponent } from '../../components/input/input.component';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../components/button/button.component';
import { ContactService } from './contact.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [InputComponent, FormsModule, CommonModule, ButtonComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit, OnDestroy{

  form = {
    name: "",
    email: "",
    phone: "",
    category: ""
  }

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {

  }

  handleSubmit() {

    let sub = this.contactService.handleCreateContact(this.form).subscribe({
      next: res => {
        console.log(res)
      },
      error: (err) => {
        console.log(err)
      }
    })

    this.unsubs.push(sub);
  }

  unsubs: Subscription[] = [];

  ngOnDestroy(): void {

  }
}
