import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-input-white',
  templateUrl: './input-white.component.html',
  styleUrls: ['./input-white.component.css'],
})
export class InputButtonComponent {
  @Input() placeholder: string = '';
  @Input() buttonText: string = 'Submit';
  @Input() value: string = '';
  @Input() disabled: boolean = true;
  @Input() type: string = 'text';
  @Input() required = false;
  @Input() loading = false;
  @Output() action = new EventEmitter<string>();

  @ViewChild('inputField') inputField!: ElementRef<HTMLInputElement>;

  onButtonClick() {
    if (this.disabled) return;
    const value = this.inputField.nativeElement.value;
    if (value.trim()) {
      this.action.emit(value);
    }
  }

  onKeyUp(event: KeyboardEvent) {
    if (this.disabled) return;
    if (event.key === 'Enter') {
      this.onButtonClick();
    }
  }
}
