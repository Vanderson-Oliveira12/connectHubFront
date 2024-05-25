import { Component, OnDestroy, OnInit } from '@angular/core';
import { InputComponent } from '../../components/input/input.component';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../components/button/button.component';
import { ContactService } from './contact.service';
import { Subscription } from 'rxjs';

type Form = {
  name: string;
  email: string;
  phone: string;
  category: string;
};

type typeFormErrors = {
  name: {
      hasError: boolean;
      message: string;
  };
  email: {
      hasError: boolean;
      message: string;
  };
  phone: {
      hasError: boolean;
      message: string;
  };
  category: {
      hasError: boolean;
      message: string;
  };
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [InputComponent, FormsModule, CommonModule, ButtonComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit, OnDestroy{

  form: Form = {
    name: "",
    email: "",
    phone: "",
    category: ""
  }

  formErrors: typeFormErrors = {
    name: {
      hasError: false,
      message: ""
    },
    email:  {
      hasError: false,
      message: ""
    },
    phone:  {
      hasError: false,
      message: ""
    },
    category:  {
      hasError: false,
      message: ""
    }
  }

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {

  }

  handleSubmit() {

    let isFormValid = this.handleValidForm();


    console.log(isFormValid)

/*     if(isFormValid) {
      let sub = this.contactService.handleCreateContact(this.form).subscribe({
        next: res => {
          console.log(res)
        },
        error: (err) => {
          console.log(err)
        }
      })

      this.unsubs.push(sub);
    } */

  }

  handleValidForm() {

    let isFormValid = !!this.form.name.length
    && !!this.form.email.length
    && (!this.form.phone.length || this.form.phone.length <= 11)
    && !!this.form.category.length

    if(!this.form.name) {
      this.formErrors.name = {
        hasError: true,
        message: "Campo obrigatório!"
      }
    }
    if(!this.form.email) {
      this.formErrors.email = {
        hasError: true,
        message: "Campo obrigatório!"
      }
    }

    if(this.form.phone.length < 11) {
      this.formErrors.phone = {
        hasError: true,
        message: "Preencha o telefone com dados válidos!"
      }
    }

    if(!this.form.phone) {
      this.formErrors.phone = {
        hasError: true,
        message: "Campo obrigatório!"
      }
    }


    if(!this.form.category) {
      this.formErrors.category = {
        hasError: true,
        message: "Campo obrigatório!"
      }
    }

    return isFormValid;

  }

  unsubs: Subscription[] = [];

  ngOnDestroy(): void {

  }
}
