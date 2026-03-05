import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { FaIconComponent, SizeProp } from "@fortawesome/angular-fontawesome";
import { fontaIcons } from '../static/fontaIcons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'footer',
  imports: [DividerModule, FontAwesomeModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly fontaIcons = fontaIcons;
  externalLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/leofrio/leonardo-portfolio-front',
      isLayered: false,
      icon: fontaIcons.brands.faGithub,
      type: 'link',
      iconType: 'fa',
      size: 'sm' as SizeProp,
      additionalStyleIcon: 'margin-left:2px;',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/leonardo-pontes-gaspar-7aabab248/',
      isLayered: true,
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
      icon: fontaIcons.regular.faFileLines,
      additionalStyleIcon: 'color:red;margin-left:2px',
      type: 'download',
      iconType: 'fa',
      size: 'sm' as SizeProp,
    },
  ];
}
