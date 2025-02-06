import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, instagram, linkedin, twitter, website } from '../helpers/links';
import {
  chakraUi,
  eslint,
  firebase,
  nextJs,
  nx,
  pnpm,
  react,
  reactQuery,
  tailwindCss,
  typescript,
  vue,
  aws,
  python,
  pytorch,
  electron,
  mongoDb,
  nodeJs,
  javascript,
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Jobs & Research',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  
  jobs: [
    {
      role: 'Research Assistant Machine Learning',
      company: 'CIVS',
      image: import('@/assets/logos/civs-logo-v2.jpg'),
      dates: [new Date('2023-10'), null],
      description: `
        - **Silicon content prediction via ML in blast furnace**
          - **90% Accuracy** 
          - Research paper accepted
          - Energy efficiency because of good silicon predictability implies **immense economic impact.** 
        - **Hearth erosion modeling**
          - Implemented first principle heat transfer models (forward)
          - Engineered optimization flow (inverse process) via tuning, choosing step sizes, making manifolds smooth and choosing the best optimization algorithms 
          - ML state models and ROMs used fasten computation from **5-10 minutes per 1 forward iteration to 10 seconds** 
          - Research paper underway
      `,
      tagsList: {
        title: 'Technologies',
        tags: [pytorch(), python()],
      },
      links: [website({ url: 'https://www.pnw.edu/civs/' })],
    },


    {
      role: 'Research Assistant (Remote)',
      company: 'HKUST',
      image: import('@/assets/logos/hkust-logo-v2.png'),
      dates: [new Date('2024-04'), new Date('2024-08')],
      description: `
        NLP & Efficient LLM research with a publication in EMNLP 2024
      `,
      tagsList: {
        title: 'Technologies',
        tags: [pytorch(), python()],
      },
      links: [website({ url: 'https://hkust.edu.hk/' })],
    },

    {
      role: 'Research Assistant (Remote)',
      company: 'CUHK',
      image: import('@/assets/logos/cuhk-logo.png'),
      dates: [new Date('2022-10'), new Date('2023-04')],
      description: `
        - Computer Vision & Attention Mechanisms in Medical Imaging and Live Surgical Feeds.
        - Research Published in IEEE
      `,
      tagsList: {
        title: 'Technologies',
        tags: [pytorch(), python()],
      },
      links: [website({ url: 'https://www.cuhk.edu.hk/english/index.html' })],
    },

    {
      role: 'Machine Learning Engineer',
      company: 'Lalamove',
      image: import('@/assets/logos/lalamove-logo.jpg'),
      dates: [new Date('2022-03-07'), new Date('2023-06-31')],
      description: `
        - Improved **image localization & detection models** for accurate market penetration count - **90% accuracy & 70,000 USD savings**
        - Developed image detection models, **OCR & clustering models** for real-time **license plate number detection - prompt bonus delivery and minimal manual intervention with associated costs**
        - Established data pipeline, modeling and deployment flow for **risk assessment models** to **predict fraud - prototype deployed (0.95 F1 score) that handled tens of thousands of transactions daily.**
        - Received the **highest bonus** in the year (4 people among 150 in the office) 
      `,
      tagsList: {
        title: 'Technologies',
        tags: [aws(), pytorch(), python()],
      },
      links: [website({ url: 'https://www.lalamove.com/en-hk/' }), linkedin({ url: 'https://www.linkedin.com/company/lalamove/' })],
    },
    {
      role: 'Software & Machine Learning Engineer',
      company: 'Gense Technologies',
      image: import('@/assets/logos/gense-logo.jpg'),
      dates: [new Date('2020-11'), new Date('2022-02')],
      description: `
        - Developed LSTM and Conv1D models for **breathing waveform pattern** classification. - **improved final EIT lung diagnosis**
        - Developed & deployed **EIT Amplitude Image Classifier** using two distinct iterative improvement approaches - **improved final EIT diagnosis**.
        - Developed & deployed **[Gense Mobile App](https://play.google.com/store/apps/details?id=com.gensetech.genseappsp&hl=en_US)**
          - User account Management
          - Live Test sync with Backend Server
          - Test results storage & visualization
        - Published a research paper in IEEE
      `,
      tagsList: {
        title: 'Technologies',
        tags: [react(), pytorch(),python()],
      },
      links: [website({ url: 'https://www.gensetechnologies.com/' }), linkedin({ url: 'https://www.linkedin.com/company/gensetech/' })],
    },
    {
      role: 'Frontend Developer - Commissioned Work',
      company: 'Beardbee',
      image: import('@/assets/logos/beardbee-logo-v4.jpg'),
      dates: [new Date('2020-02'), new Date('2020-04')],
      description: `
        - Worked on **User Input UI** of a charging system 
        - Produced maintainable, reusable and and portable code using Electron & React for:
            - Web
            - Desktop
            - Mobile (IOS & Android) 
      `,

      tagsList: {
        title: 'Technologies',
        tags: [react(), electron()],
      },
      links: [website({ url: 'https://www.beardbee.com/' })],
    },

    {
      role: 'Tech Intern - Full Stack Developer',
      company: 'Lalamove',
      image: import('@/assets/logos/lalamove-logo.jpg'),
      dates: [new Date('2019-06-01'), new Date('2019-08-01')],
      description: `
        - **Refactored microservice** responsible for grouping orders, reading client inputs
          and forming routes
        - Microservice in various countries and cities like Malaysia, India & Bangkok
      `,
      tagsList: {
        title: 'Technologies',
        tags: [aws(), pytorch(), python()],
      },
      links: [website({ url: 'https://www.lalamove.com/en-hk/' }), linkedin({ url: 'https://www.linkedin.com/company/lalamove/' })],
    },

    {
      role: 'Tech Intern - Backend Developer',
      company: 'GoTalents',
      image: import('@/assets/logos/gotalents-logo-2.jpg'),
      dates: [new Date('2017-12'), new Date('2018-03')],
      description: `
        - Backend database & functionality setup 
          - basic user notification & news feed
          - location mapping
          - messaging
      `,

      tagsList: {
        title: 'Technologies',
        tags: [mongoDb(), nodeJs(), javascript()],
      },
      links: [linkedin({ url: 'https://www.linkedin.com/company/gotalentsglobal/' })],
    }
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
