import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { fontaIcons } from '../../../static/fontaIcons';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSection {
  id: string;
  title: string;
  description: string;
  tagSeverity: 'info' | 'success' | 'warn';
  icon: IconDefinition;
  items: FaqItem[];
}

@Component({
  selector: 'app-faq',
  imports: [AccordionModule, CardModule, TagModule, AnimateOnScrollModule, FontAwesomeModule],
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
})
export class Faq {
  readonly fontaIcons = fontaIcons;
  readonly totalQuestions = 9;

  readonly sections: FaqSection[] = [
    {
      id: 'general',
      title: 'General',
      description: 'Quick context about the portfolio and who this content is for.',
      tagSeverity: 'info',
      icon: fontaIcons.solid.faCircleInfo,
      items: [
        {
          question: 'What is this portfolio for?',
          answer:
            'This portfolio highlights my projects,experience, skills, and contact channels in one place. It is designed to make technical background and recent work easy to explore.',
        },
        {
          question: 'Who should use this page?',
          answer:
            'Recruiters, engineering managers, and collaborators can use this page to quickly understand stack preferences, project direction, and how to get in touch.',
        },
        {
          question: 'Is the content updated frequently?',
          answer:
            'Yes. Project links, CV, and profile details are reviewed and updated as new work is shipped or professional information changes.',
        },
      ],
    },
    {
      id: 'projects',
      title: 'Projects & Stack',
      description: 'Main technologies, source code visibility, and technical walkthrough details.',
      tagSeverity: 'success',
      icon: fontaIcons.solid.faFileLines,
      items: [
        {
          question: 'Which technologies were used to make this site?',
          answer:
            'this was built with Angular for the frontend, using PrimeNG for UI components and FontAwesome for icons. The backend,mostly used for the chatbot section, is made using kotlin and OpenAI API. this site has its frontend hosted on vercel, and the backend on Railway.',
        },
        {
          question: 'Can i check out the source for this project?',
          answer:
            'Of Course you can! You can click the github link in the footer on in the navbar to see the frontend code. the backend code is sadly not avaliable to the public due to the api keys being stored there, but if you want to see it, just reach out and ask for it! ',
        },
        {
          question: 'Can I request a technical walkthrough?',
          answer:
            'Yes. If you are evaluating a project, you can ask for architecture choices, tradeoffs, deployment notes, and possible next iteration plans.',
        },
      ],
    },
    {
      id: 'contact',
      title: 'Contact & Availability',
      description: 'How to reach out and what to include when sharing an opportunity.',
      tagSeverity: 'warn',
      icon: fontaIcons.solid.faLocationDot,
      items: [
        {
          question: 'How can I contact Leonardo directly?',
          answer:
            'Use the email shown in the footer, or reach out through LinkedIn. Email is best for opportunities requiring technical context and timelines.',
        },
        {
          question: 'What kind of work is Leonardo currently available for?',
          answer:
            'Currently i am avaliable only for remote work opportunities.',
        },
        {
          question: 'Can I download the CV from this site?',
          answer:
            'Yes. The footer includes a direct CV download action so you can keep an offline copy.',
        },
      ],
    },
  ];
}
