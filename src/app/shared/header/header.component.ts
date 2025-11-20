import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ToolbarModule, ButtonModule, SidebarModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  mobileSidebarVisible = false;

  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/']);
    this.mobileSidebarVisible = false;
  }

  navigateToPrimeNG() {
    this.router.navigate(['/primeng-test']);
    this.mobileSidebarVisible = false;
  }

  navigateToAbout() {
    this.router.navigate(['/about']);
    this.mobileSidebarVisible = false;
  }

  navigateToContact() {
    this.router.navigate(['/contact']);
    this.mobileSidebarVisible = false;
  }

  toggleMobileSidebar() {
    this.mobileSidebarVisible = !this.mobileSidebarVisible;
  }

  onSearch() {
    console.log('Search clicked');
    // Add search functionality here
  }
}