import { Component, OnInit, signal } from '@angular/core';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { Ticket } from '../../models/ticket';
import { CommonModule } from '@angular/common';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { tickets } from '../../data/tickets';
import { Stages } from '../../models/Stages';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    NzFlexModule,
    NzCardModule,
    NzTagModule,
    CommonModule,
    NzDropDownModule,
    NzIconModule
  ],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  isVertical = false;
  stages = Stages;
  tickets = signal<Ticket[]>(tickets);

  constructor() { }

  ngOnInit() {
  }

  getTicketsForTheStage(stageNo: number) {
    return this.tickets().filter(t => t.stage === stageNo);
  }

  getNoOfTickets(stageNo: number) {
    const count = this.getTicketsForTheStage(stageNo).length;
    return count > 1 ? `${count} tickets` : `${count} ticket`;
  }

  getAvailableStatuses(currentStatusId: number) {
    return this.stages.filter(x => x.value !== currentStatusId);
  }

  getPriorityColor(prioValue: string) {
    let color = '';
    if (prioValue === 'Low')
      color = 'orange'
    else if (prioValue === 'Medium')
      color = '#87d068'
    else
      color = '#f50'

    return color;
  }

  onChangeStatus(statusId: number, ticketId: number) {
    let ticket = this.tickets().find(x => x.id === ticketId);
    const status = this.stages.find(x => x.value === statusId);

    ticket.stage = status.value;

    this.tickets.update(values => {
      return [...values.filter(x => x.id !== ticket.id), ticket];
    });
  }
}
