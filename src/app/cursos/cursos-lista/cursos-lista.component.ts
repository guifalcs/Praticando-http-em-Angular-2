import { Component, OnDestroy, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';
import { Curso } from '../curso';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent implements OnInit, OnDestroy {

  sub: Subscription;

  cursos: Curso[]

  cursos$: Observable<Curso[]>

  constructor(private service: CursosService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.sub = this.service.list().subscribe(dados => this.cursos = dados)
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}

