import {Component} from '@angular/core';
import {DatePipe} from "@angular/common";

export interface banItem{
  banNik: string,
  banedNik: string,
  ban: Date,
  unban: Date,
  reason: string
}

@Component({
  selector: 'app-ban-list',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './ban-list.component.html',
  styleUrl: './ban-list.component.scss'
})
export class BanListComponent {

  banList: banItem[] = [
    {
      banNik: 'dasdsadasdasdsadasd',
      banedNik: 'dasdsadasd',
      ban: new Date(2024, 8, 7, 13, 30),
      unban: new Date(),
      reason: '1.2 fsdfsdf'
    },
    {
      banNik: 'dasdsadasd',
      banedNik: 'dasdsadasd',
      ban: new Date(),
      unban: new Date(),
      reason: '1.2 fsdfsdf'
    },
    {
      banNik: 'dasdsadasd',
      banedNik: 'dasdsadasd',
      ban: new Date(),
      unban: new Date(),
      reason: '1.2 fsdfsdf'
    },
  ]

  constructor() {
    console.log(Date.now())
  }
}
