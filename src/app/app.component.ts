import { Component } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';
import { formatDate } from '@angular/common';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formControlData = new FormControl();
  formControlInputOculto = new FormControl();
  title = 'Datepicker';
  data: string;
  test: string = '';
  dia: string = '';
  mes: string = '';
  ano: string = '';

  DataSelecionada(event: MatDatepickerInputEvent<Date>) {
    this.data = formatDate(new Date(event.value).toDateString(), 'MM-yyyy', 'en-US');
    this.formControlData.setValue(this.data);
  }

  mascaraCompetencia() {
    this.test = this.test.replace(/\D/g, ""); //Remove tudo o que não é dígito
    this.test = this.test.replace(/(\d{2})(\d)/, "$1/$2");
    this.test = this.test.replace(/(\d{2})(\d)/, "$1/$2");
    this.test = this.test.replace(/(\d{2})(\d{2})$/, "$1$2");
  }

  parseData()
  {
    if(this.test.length == 10)
    {
    this.dia = this.test.match(/(\d{2})/)[0].toString();
    this.mes = this.test.match(/(\d{2})/)[1].toString();
    this.ano = this.test.match(/(\d{4})/)[0].toString();
    this.formControlInputOculto.setValue(new Date(parseInt(this.ano), parseInt(this.mes) - 1, parseInt(this.dia)));
    }
  }

}
