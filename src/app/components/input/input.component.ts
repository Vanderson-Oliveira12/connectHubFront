import { CommonModule } from '@angular/common';
import { Target } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent implements OnInit {

  @Input() messageError = "";
  @Output() messageErrorChange = new EventEmitter<any>();

  value: string = ""

  @Input() placeholder = "";
  @Input() nameAndID = "";
  @Input() type = "text";

  @Input() model: string = "";
  @Output() modelChange = new EventEmitter<string>();

  constructor() {

  }

  ngOnInit(): void {

  }

  setValueInModel(e: Event) {
    const target = (e.target as HTMLInputElement).value;
    this.modelChange.emit(target);
    this.messageError = ""
  }

}
