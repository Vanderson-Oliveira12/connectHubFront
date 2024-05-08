import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input() classList: string = '';

  @Input() value: string = "";
  @Output() onClick = new EventEmitter();

  handleClick() {
    this.onClick.emit();
  }
}
