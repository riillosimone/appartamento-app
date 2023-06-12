import { Component, OnInit } from '@angular/core';
import { AppartamentoService } from '../../appartamento.service';
import { Appartamento } from 'src/app/module/appartamento';

@Component({
  selector: 'app-appartamento-list',
  templateUrl: './appartamento-list.component.html',
  styleUrls: ['./appartamento-list.component.css']
})
export class AppartamentoListComponent implements OnInit {

  listaAppartamenti: Appartamento[] = [];

  constructor(private appartamentoService: AppartamentoService) {

  }
  ngOnInit(): void {
    this.appartamentoService.listaAll()
    .subscribe(appartamenti => this.listaAppartamenti = appartamenti);
  }
}
