import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Message } from '../message';
import { MessageService } from '../message.service';
import { Globals } from '../globals';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.css']
})
export class MessageDetailComponent implements OnInit {

  message: Message;

  constructor(
    private route: ActivatedRoute,
    private messageService: MessageService,
    private location: Location,
    private globals: Globals
  ) { }

  ngOnInit(): void {
    this.getMessage();
  }

  getMessage(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.messageService.getMessage(id)
      .subscribe(message => this.message = message);
  }

  goBack(): void {
    this.location.back();
  }
}
