import { Component } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Datepicker';
  data: string;

  DataSelecionada(event: MatDatepickerInputEvent<Date>) {
    this.data = formatDate(new Date(event.value).toDateString(),'MM-yyyy','en-US');
  }

}
