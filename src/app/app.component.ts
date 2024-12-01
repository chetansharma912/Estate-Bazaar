import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CopyrightComponent } from './shared/copyright/copyright.component';
import { BannerComponent } from './shared/banner/banner.component';
import { StickyFooterComponent } from './shared/sticky-footer/sticky-footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    CopyrightComponent,
    StickyFooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'estate-bazaar';
}
