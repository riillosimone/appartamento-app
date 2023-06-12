import { Component } from '@angular/core';
import { AppartamentoService } from '../../appartamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Appartamento } from 'src/app/module/appartamento';

@Component({
  selector: 'app-appartamento-insert',
  templateUrl: './appartamento-insert.component.html',
  styleUrls: ['./appartamento-insert.component.css']
})
export class AppartamentoInsertComponent {

  constructor(private appartamentoService: AppartamentoService, private route: ActivatedRoute, private router: Router){}

  appartamentoInsert?:Appartamento = {
    id:0,
    descrizione:'',
    metriQuadrati: 0,
    dataCostruzione: new Date(),
    disponibileDaSubito: false
  }
  onBack(): void {
    this.router.navigate(['/appartamento/list']);
  }

  onPremiConferma() {
    if (this.appartamentoInsert) {
      this.appartamentoService.insert(this.appartamentoInsert).subscribe();
      this.appartamentoInsert = undefined;
      this.router.navigate(['/appartamento/list']);
    }
  }
}
