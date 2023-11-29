import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients-list',
  standalone: true,
  templateUrl: './clients-list.component.html',
  styleUrl: './clients-list.component.scss',
  imports: [CommonModule, ToolbarModule, TableModule, ButtonModule]
})
export class ClientsListComponent {
  public clients: any = [{}, [], [], {}, [], [], [], [], {}, [], [],
  [], [], {}, [], [], [], [], {}, [], [], [], [], {}, [], [], [], [], {},
  [], [], [], [], {}, [], [], [], [], {}, [], [], [], [], {}, [], []];
  constructor(private r: Router) {

  }
  onNew() {
    this.r.navigate(['cliente']);
  }
  onEdit(obj: any) {
    this.r.navigate(['cliente', 5]);
  }
  onDelete(obj: any) {

  }
}
