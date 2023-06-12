import { Injectable } from '@angular/core';
import { Appartamento } from '../module/appartamento';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppartamentoService {
  private listaAppartamenti: Appartamento[] = [
    { id: 1, descrizione: 'Trilocale in via Monte Cervialto', metriQuadrati: 111, dataCostruzione: new Date('2001-3-12'), disponibileDaSubito: true },
    { id: 2, descrizione: 'Monolocale in via Prenestina', metriQuadrati: 30, dataCostruzione: new Date('1980-3-28'), disponibileDaSubito: false },
    { id: 3, descrizione: 'Bilocale in via Casilina', metriQuadrati: 68, dataCostruzione: new Date('2023-9-28'), disponibileDaSubito: false },
    { id: 4, descrizione: 'Quadrilocale in corso Francia', metriQuadrati: 150, dataCostruzione: new Date('2019-8-12'), disponibileDaSubito: true }
  ]

  constructor() { }

  listaAll(): Observable<Appartamento[]> {
    let appartamenti = of(this.listaAppartamenti);
    return appartamenti;
  }

  findById(id: number): Observable<Appartamento | undefined> {
    let appartamento = this.listaAppartamenti.find(element => element.id === id)
    return of(appartamento);
  }

  delete(id: number): Observable<boolean> {
    let index = this.listaAppartamenti.findIndex(item => item.id === id)
    if (index !== -1) {
      this.listaAppartamenti.splice(index, 1);
      return of(true);
    }
    return of(false);
  }

  insert(appartamentoInsert: Appartamento): Observable<Appartamento> {
    let maxId: number = 1;
    this.listaAppartamenti.forEach(element => {
      if (element.id > maxId) {
        maxId = element.id;
      }
    });
    appartamentoInsert.id = ++maxId;
    this.listaAppartamenti.push(appartamentoInsert);
    return of(appartamentoInsert);
  }

  update(appartamentoEdit: Appartamento):Observable<Appartamento> {
   
    let index = this.listaAppartamenti.findIndex(item => item.id === appartamentoEdit.id)
    if (index !== -1) {
      let appartamentoAggiornato = { ...this.listaAppartamenti[index], ...appartamentoEdit };
      this.listaAppartamenti[index] = appartamentoAggiornato;
    }
    return of(appartamentoEdit);
  }
}
