import {Component} from '@angular/core';
import {ProgressBarComponent} from "../progress-bar/progress-bar.component";

@Component({
  selector: 'app-monitoring',
  standalone: true,
  imports: [
    ProgressBarComponent
  ],
  templateUrl: './monitoring.component.html',
  styleUrl: './monitoring.component.scss'
})
export class MonitoringComponent {

  serversData = [
    {
      name: 'Техно Магия #1',
      progress: 20,
      total: 100
    },
    {
      name: 'Техно Магия #2',
      progress: 40,
      total: 100
    },
    {
      name: 'Техно Магия #3',
      progress: 30,
      total: 100
    }
  ]
}
