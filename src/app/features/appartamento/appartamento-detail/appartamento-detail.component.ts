import { Component, OnInit } from '@angular/core';
import { AppartamentoService } from '../../appartamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Appartamento } from 'src/app/module/appartamento';

@Component({
  selector: 'app-appartamento-detail',
  templateUrl: './appartamento-detail.component.html',
  styleUrls: ['./appartamento-detail.component.css']
})
export class AppartamentoDetailComponent implements OnInit{

  constructor(private appartamentoService:AppartamentoService,private route: ActivatedRoute,private router: Router) {}

  appartamentoDetail?:Appartamento;


    ngOnInit(): void {
      this.appartamentoService.findById(Number(this.route.snapshot.paramMap.get('id')))
      .subscribe(appartamento => this.appartamentoDetail = appartamento);
    }


    onBack():void {
      this.router.navigate(['/appartamento/list']);
    }
}
