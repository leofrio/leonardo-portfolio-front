import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { fontaIcons } from '../../../static/fontaIcons';

type exLinkType = 'download' | 'link';
interface FaqItem {
  question: string;
  answer: string;
  showSourceActions?: boolean;
  linkActionType?: exLinkType;  
  addStyleLink?:string;
  isLayred?:boolean;
  linkToType?: FooterSection;
  linkToIconType?: 'fa' | 'custom';
  linkToCustomIcon?: string;
  linkToFaIcon?: IconDefinition;
  linkToText?: string;
  showFooterScroll?: boolean;
  footerScrollToType?: FooterSection;
  footerScrollToText?: string;
}

interface FaqSection {
  id: string;
  title: string;
  description: string;
  tagSeverity: 'info' | 'success' | 'warn';
  icon: IconDefinition;
  items: FaqItem[];
} 
type FooterSection =
  | 'github'
  | 'cv'
  | 'contact'
  | 'links'
  | 'email'
  | 'number'
  | 'linkedin'
  | 'glender'; 

  

@Component({
  selector: 'app-faq',
  imports: [AccordionModule, CardModule, TagModule, FontAwesomeModule],
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
})
export class Faq {
  readonly fontaIcons = fontaIcons;
  readonly githubRepoUrl = 'https://github.com/leofrio/leonardo-portfolio-front';
  readonly typeToUrl: Record<string, string> = {
    github: 'https://github.com/leofrio/leonardo-portfolio-front',
    linkedin: 'https://www.linkedin.com/in/leonardo-pontes-gaspar-7aabab248/',
    glender: 'https://glender-front.vercel.app/home',
    cv: 'leonardo_gaspar_ats_cv_v5.pdf',
  };
  readonly footerTypeToSelector: Record<FooterSection, string> = {
    github: '#github',
    linkedin: '#linkedin',
    glender: '#glender',
    cv: '#cv',
    contact: '.footer-contact',
    links: '.footer-links',
    email: '#email-link',
    number: '#phone-number',
  };
  get totalQuestions(): number {
    return this.sections.reduce((sum, section) => sum + section.items.length, 0);
  }

  readonly sections: FaqSection[] = [
    {
      id: 'general',
      title: 'General',
      description: 'Quick context about my portfolio and who this page is designed for.',
      tagSeverity: 'info',
      icon: fontaIcons.solid.faCircleInfo,
      items: [
        {
          question: 'What is this portfolio for?',
          answer:
            'This portfolio highlights my projects, experience, skills, and contact channels in one place. I designed it so you can quickly understand what I build and how I work.For even more information on my experience go to my linkedin or cv',
          showSourceActions: true,
          linkToType: 'linkedin',
          linkActionType: 'link',
          linkToIconType: 'fa',
          linkToFaIcon: fontaIcons.brands.faLinkedin,
          linkToText: 'Find out more at my Linkedin!',
          showFooterScroll: true,
          footerScrollToType: 'cv',
          footerScrollToText: 'CV link',
        },
        {
          question: 'Who should use this page?',
          answer:
            'Recruiters, engineering managers, and potential collaborators can use this page to quickly evaluate my stack preferences, project direction, and how to contact me.',
        },
        {
          question: 'Is the content updated frequently?',
          answer:
            'Yes. I keep project links, my CV, and profile details updated as I ship new work or change availability.',
          showSourceActions: true,
          showFooterScroll: true,
          footerScrollToType: 'links',
          footerScrollToText: 'Scroll to links',
        },
        {
          question: 'What is the Glender link at the end of the page?',
          answer:
            'The Glender link at the bottom of the page leads to my 2024 Computer Science thesis project at the University of Fortaleza (UNIFOR). Glender is a chatbot that connects to a user’s Steam account and recommends games based on their requests, while also taking into account their previously and recently played titles.',
          showSourceActions: true,
          linkActionType: 'link', 
          addStyleLink:"color:gold",
          linkToType: 'glender',
          linkToIconType: 'custom',
          linkToCustomIcon: 'glender-icon',
          linkToText: 'Go to the Glender project page',
          showFooterScroll: true,
          footerScrollToType: 'glender',
          footerScrollToText: 'Or scroll to the Glender link at the bottom of the page',
        },
      ],
    },
    {
      id: 'projects',
      title: 'Projects & Stack',
      description:
        'Main technologies I use, source code visibility, and technical walkthrough details.',
      tagSeverity: 'success',
      icon: fontaIcons.solid.faFileLines,
      items: [
        {
          question: 'Which technologies were used to make this site?',
          answer:
            'I built this with Angular on the frontend, PrimeNG for UI components, and FontAwesome for icons. The backend (mainly for the chatbot) uses Kotlin and the OpenAI API. The frontend is hosted on Vercel and the backend is hosted on Railway.',
          showSourceActions: true,
          linkActionType: 'link',
          linkToType: 'github',
          linkToIconType: 'fa',
          linkToFaIcon: fontaIcons.brands.faGithub,
          linkToText: 'Check out the frontend source code on GitHub!',
        },
        {
          question: 'Can i check out the source for this project?',
          answer:
            'Yes. You can access my frontend source code publicly on GitHub. My backend repository is private because it contains sensitive environment configuration, but I can provide architecture details if you ask.',
          showSourceActions: true,
          linkActionType: 'link',
          linkToType: 'github',
          linkToIconType: 'fa',
          linkToFaIcon: fontaIcons.brands.faGithub,
          linkToText: 'Check out the frontend source code on GitHub!',
          showFooterScroll: true,
          footerScrollToType: 'links',
          footerScrollToText: 'Check out other projects the links below!',
        },
        {
          question: 'Can I request a technical walkthrough?',
          answer:
            'Yes. If you are evaluating a project, I can walk you through architecture choices, tradeoffs, deployment notes, and next-step ideas.',
          showSourceActions: true,
          showFooterScroll: true,
          footerScrollToType: 'contact',
          footerScrollToText: 'Contact me to request a walkthrough!',
        },
      ],
    },
    {
      id: 'contact',
      title: 'Contact & Availability',
      description: 'How to reach me and what to include when sharing an opportunity.',
      tagSeverity: 'warn',
      icon: fontaIcons.solid.faLocationDot,
      items: [
        {
          question: 'How can I contact you directly?',
          answer:
            'You can reach me through the email shown in the footer or via LinkedIn. Email is usually the best option for opportunities with technical context and timelines.',
          showSourceActions: true,
          linkActionType: 'link',
          linkToType: 'linkedin', 
          isLayred:true,
          linkToIconType: 'fa',
          linkToFaIcon: fontaIcons.brands.faLinkedin,
          linkToText: 'Check out my Linkedin!',
          showFooterScroll: true,
          footerScrollToType: 'email',
          footerScrollToText: 'Find my email address in the footer below!',
        },
        {
          question: 'What kind of work are you currently available for?',
          answer: 'I am currently available for remote work opportunities.',
        },
        {
          question: 'Can I download the CV from this site?',
          answer:
            'Yes. I provide a direct CV download option down below, but you can also download it from the link below.',
          showSourceActions: true,
          linkActionType: 'download',
          linkToType: 'cv',
          addStyleLink:'color:red',
          linkToIconType: 'fa',
          linkToFaIcon: fontaIcons.solid.faFileArrowDown,
          linkToText: 'Download my CV Here!',
          showFooterScroll: true,
          footerScrollToType: 'cv',
          footerScrollToText: 'Or jump to the CV download below!',
        },
      ],
    },
  ];

  openGithubRepository(): void {
    window.open(this.githubRepoUrl, '_blank');
  }

  scrollToFooterLinks(section: FooterSection = 'links'): void {
    const chosenSelector = this.footerTypeToSelector[section];
    const footerLinks = document.querySelector(
      `.main-footer ${chosenSelector}`,
    ) as HTMLElement | null;
    if (!footerLinks) {
      return;
    }

    footerLinks.scrollIntoView({ behavior: 'smooth', block: 'center' });
    footerLinks.classList.remove('footer-links-highlight');
    setTimeout(() => footerLinks.classList.add('footer-links-highlight'), 120);
    setTimeout(() => footerLinks.classList.remove('footer-links-highlight'), 1700);
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
  open_download_external_link(fDest: string, type: string) {
    const linkOrDownload = this.typeToUrl[fDest];
    if (type === 'link') {
      this.openExternalLink(linkOrDownload);
    } else if (type === 'download') {
      this.downloadPdf(linkOrDownload);
    }
  }
}
