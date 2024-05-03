import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input() value: string = "";
  @Output() onClick = new EventEmitter();

  handleClick() {
    this.onClick.emit();
  }
}
