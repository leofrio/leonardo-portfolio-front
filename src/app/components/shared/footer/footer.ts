import { Component, inject } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { FaIconComponent, SizeProp } from '@fortawesome/angular-fontawesome';
import { fontaIcons } from '../../../static/fontaIcons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastService } from '../../../services/toast-service';

@Component({
  selector: 'footer',
  imports: [DividerModule, FontAwesomeModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly fontaIcons = fontaIcons;
  private readonly toastrService = inject(ToastService);
  email = 'leofrio1@gmail.com';
  externalLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/leofrio/leonardo-portfolio-front',
      isLayered: false,
      icon: fontaIcons.brands.faGithub,
      id: 'github',
      type: 'link',
      iconType: 'fa',
      size: 'sm' as SizeProp,
      additionalStyleIcon: 'margin-left:2px;',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/leonardo-pontes-gaspar-7aabab248/',
      isLayered: true,
      id: 'linkedin',
      icon: fontaIcons.brands.faLinkedinIn,
      mask: fontaIcons.solid.faSquare,
      isInversedIcon: true,
      isInversedMask: false,
      additionalStyleMask: 'color:#0a66c2',
      additionalStyleIcon: 'color:white',
      transform: 'shrink-4.5 down-.5',
      type: 'link',
      iconType: 'fa',
      size: 'sm' as SizeProp,
    },
    {
      name: 'Glender',
      url: 'https://github.com/leofrio/leonardo-portfolio-front',
      isLayered: false,
      id: 'glender',
      icon: 'glender-icon fa-sm',
      additionalStyleIcon: 'color:gold;margin-left:3px;margin-right:2px',
      type: 'link',
      iconType: 'custom',
      size: 'sm' as SizeProp,
    },
    {
      name: 'CV',
      url: 'leonardo_gaspar_cv_2026_v4.pdf',
      isLayered: false,
      id: 'cv',
      icon: fontaIcons.regular.faFileLines,
      additionalStyleIcon: 'color:red;margin-left:2px',
      type: 'download',
      iconType: 'fa',
      size: 'sm' as SizeProp,
    },
  ];
  copyEmail() {
    navigator.clipboard
      .writeText(this.email)
      .then(() => {
        this.toastrService.info('Email copied to clipboard!');
      })
      .catch(() => {
        this.toastrService.error('Failed to copy email.');
      });
  }
  downloadPdf(file_path: string): void {
    const link = document.createElement('a');
    link.href = file_path;
    link.download = file_path;
    link.click();
  }
  openExternalLink(eLink: string) {
    window.open(eLink, '_blank');
  }
  open_download_external_link(url: string, type: string) {
    if (type === 'link') {
      this.openExternalLink(url);
    } else if (type === 'download') {
      this.downloadPdf(url);
    }
  }
}
