import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { InputTextModule } from 'primeng/inputtext'
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
@Component({
  selector: 'app-clients-edit',
  standalone: true,
  imports: [CommonModule, ToolbarModule, InputTextModule, ButtonModule],
  templateUrl: './clients-edit.component.html',
  styleUrl: './clients-edit.component.scss'
})
export class ClientsEditComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {


  }
  ngOnInit(): void {
    console.log('entrando');
    let h = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.getHero(params.get('id')!)
      )
    );
  }

  onSave(): void {

  }
  onCancel(): void {
    this.router.navigate(['clientes']);
  }
  getHero(id: string): Observable<any> {
    console.log('hero');
    console.log(id);
    return new Observable<any>(observer => {

    });
  }
}
