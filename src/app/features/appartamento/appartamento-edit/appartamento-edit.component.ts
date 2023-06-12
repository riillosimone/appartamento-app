import { Component, OnInit } from '@angular/core';
import { AppartamentoService } from '../../appartamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Appartamento } from 'src/app/module/appartamento';

@Component({
  selector: 'app-appartamento-edit',
  templateUrl: './appartamento-edit.component.html',
  styleUrls: ['./appartamento-edit.component.css']
})
export class AppartamentoEditComponent implements OnInit{

  constructor(private appartamentoService: AppartamentoService, private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.appartamentoService.findById(Number(this.route.snapshot.paramMap.get('id')))
      .subscribe(appartamento => this.appartamentoEdit = appartamento);
  }
  onBack(): void {
    this.router.navigate(['/appartamento/list']);
  }
  appartamentoEdit?:Appartamento;

  onPremiAggiorna():void {
    if (this.appartamentoEdit) {
      let appartamentoAggiornato: Appartamento ={
        id: this.appartamentoEdit.id,
        descrizione: this.appartamentoEdit.descrizione,
        metriQuadrati: this.appartamentoEdit.metriQuadrati,
        dataCostruzione: this.appartamentoEdit.dataCostruzione,
        disponibileDaSubito: this.appartamentoEdit.disponibileDaSubito
      }
      this.appartamentoService.update(appartamentoAggiornato).subscribe();
      this.appartamentoEdit = undefined;
      this.router.navigate(['/appartamento/list']);
    }
  }
}
