import { Component, OnInit } from '@angular/core';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTagModule } from 'ng-zorro-antd/tag';
@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    NzFlexModule,
    NzCardModule,
    NzTagModule
  ],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  isVertical = false;
  constructor() { }

  ngOnInit() { }

}
