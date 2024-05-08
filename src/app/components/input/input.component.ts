import { Target } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent implements OnInit {

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


}
