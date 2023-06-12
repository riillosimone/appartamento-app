import { Component, OnInit } from '@angular/core';
import { Appartamento } from 'src/app/module/appartamento';
import { AppartamentoService } from '../../appartamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-appartamento-delete',
  templateUrl: './appartamento-delete.component.html',
  styleUrls: ['./appartamento-delete.component.css']
})
export class AppartamentoDeleteComponent implements OnInit {
  ngOnInit(): void {
    this.appartamentoService.findById(Number(this.route.snapshot.paramMap.get('id')))
      .subscribe(appartamento => this.appartamentoDelete = appartamento);
  }
  constructor(private appartamentoService: AppartamentoService, private route: ActivatedRoute, private router: Router) { }

  appartamentoDelete?: Appartamento;

  onBack(): void {
    this.router.navigate(['/appartamento/list']);
  }

  onConfermaDelete() {
    if (this.appartamentoDelete) {
      this.appartamentoService.delete(this.appartamentoDelete?.id).subscribe();
    }
    this.router.navigate(['appartamento/list']);
  }
}
