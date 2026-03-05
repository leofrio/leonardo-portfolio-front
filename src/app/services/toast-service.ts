import { Injectable, inject } from '@angular/core';
import { MessageService } from 'primeng/api';
@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private readonly messageService = inject(MessageService); 

  sucess(text: string, title?: string) {
    this.messageService.add({
      severity: 'success',
      summary: title ?? 'Sucess',
      detail: text,
    });
  }

  info(text: string, title?: string) {
    this.messageService.add({
      severity: 'info',
      summary: title ?? 'Info',
      detail: text,
    });
  }

  warning(text: string, title?: string) {
    this.messageService.add({
      severity: 'warn',
      summary: title ?? 'Warning',
      detail: text,
    });
  }

  error(text: string, title?: string) {
    this.messageService.add({
      severity: 'error',
      summary: title ?? 'Error',
      detail: text,
    }); 
  }
}
