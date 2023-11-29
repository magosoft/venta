import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from "./topbar/topbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
@Component({
    selector: 'app-layout',
    standalone: true,
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss',
    imports: [CommonModule, RouterOutlet, TopbarComponent, SidebarComponent]
})
export class LayoutComponent {

}
