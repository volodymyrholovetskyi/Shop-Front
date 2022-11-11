import { Component, OnDestroy, OnInit } from '@angular/core';
import { AdiminMessageService } from '../adimin-message.service';

@Component({
  selector: 'app-admin-message',
  templateUrl: './admin-message.component.html',
  styleUrls: ['./admin-message.component.scss']
})
export class AdminMessageComponent implements OnInit, OnDestroy {

  messages: Array<string> = [];
  private clickCounter: number = 0;

  constructor(private adminMessageService: AdiminMessageService) { }

  ngOnInit(): void {
    this.adminMessageService.subject.subscribe(messages => {
      this.messages = messages;
      this.timeoutCloseMessages();
    });
  }

  
  
  clearMessages() {
    this.messages = [];
    this.adminMessageService.clear();
  }
  
  ngOnDestroy(): void {
    this.adminMessageService.subject.unsubscribe();
  }
  
  private timeoutCloseMessages() {
    this.clickCounter++;
    setTimeout(() => {
      if (this.clickCounter == 1) {
        this.clearMessages();
      }
      this.clickCounter--;
    }, 12000);
  }
}
