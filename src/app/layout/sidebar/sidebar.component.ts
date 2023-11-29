import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from "../menu/menu.component";

@Component({
    selector: 'app-sidebar',
    standalone: true,
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss',
    imports: [CommonModule, MenuComponent]
})
export class SidebarComponent {

}
