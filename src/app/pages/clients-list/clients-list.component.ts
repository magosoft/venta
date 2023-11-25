import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-clients-list',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule],
  templateUrl: './clients-list.component.html',
  styleUrl: './clients-list.component.scss'
})
export class ClientsListComponent {
  public clients: any = [{}, [], [], {}, [], [], [], [], {}, [], [],
  [], [], {}, [], [], [], [], {}, [], [], [], [], {}, [], [], [], [], {},
  [], [], [], [], {}, [], [], [], [], {}, [], [], [], [], {}, [], []];


  onEdit(o: any) { 

  }
  onDelete(o: any) {
    
  }
}
