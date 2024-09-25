import { Component, OnInit } from '@angular/core';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { Ticket } from '../../models/ticket';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    NzFlexModule,
    NzCardModule,
    NzTagModule,
    CommonModule
  ],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  isVertical = false;
  stages = [
    {
      name: 'To Do',
      value: 1
    },
    {
      name: 'In Progress',
      value: 2
    },
    {
      name: 'Finished',
      value: 3
    }
  ]
  tickets: Ticket[] = [
    {
      id: 1,
      title: "Project Setup",
      description: "Initialize project structure and repository.",
      priority: "High",
      stage: 1
    },
    {
      id: 2,
      title: "Design UI",
      description: "Create wireframes and UI mockups.",
      priority: "Medium",
      stage: 2
    },
    {
      id: 3,
      title: "Database Schema",
      description: "Design the database schema and relationships.",
      priority: "High",
      stage: 1
    },
    {
      id: 4,
      title: "API Integration",
      description: "Integrate backend API with frontend.",
      priority: "Medium",
      stage: 2
    },
    {
      id: 5,
      title: "Testing",
      description: "Write unit and integration tests.",
      priority: "High",
      stage: 3
    },
    {
      id: 6,
      title: "Code Review",
      description: "Review code for standards and best practices.",
      priority: "Low",
      stage: 2
    },
    {
      id: 7,
      title: "Bug Fixes",
      description: "Fix bugs identified during testing.",
      priority: "High",
      stage: 3
    },
    {
      id: 8,
      title: "Deployment",
      description: "Deploy the application to production.",
      priority: "Low",
      stage: 3
    }
  ];

  constructor() { }

  ngOnInit() { }

  getTicketsForTheStage(stageNo: number) {
    return this.tickets.filter(t => t.stage === stageNo);
  }

  getPriorityColor(prioValue: string) {
    let color = '';
    if (prioValue === 'Low')
      color = 'success'
    else if (prioValue === 'Medium')
      color = 'warning'
    else
      color = 'error'

    return color;
  }
}
