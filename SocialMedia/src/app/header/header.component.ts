import { Component, Renderer2, RendererFactory2 } from '@angular/core';
import { UserService } from '../../Services/user-service.service';

@Component({
  selector: 'header-component',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  private renderer: Renderer2;
  private currentTheme: string = 'light';

  constructor(rendererFactory: RendererFactory2, public userService: UserService) {
    this.renderer = rendererFactory.createRenderer(null, null);
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.setTheme('dark');
    }
  }

  setTheme(theme: string) {
    this.renderer.setAttribute(document.documentElement, 'data-bs-theme', theme);
    this.currentTheme = theme;
    localStorage.setItem('theme', theme);
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  isDarkMode() {
    return this.currentTheme != 'light';
  }
}
