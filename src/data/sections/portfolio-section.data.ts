import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { demo, github, mockups, website } from '../helpers/links';
import {
  chakraUi,
  eslint,
  firebase,
  jest,
  nestJs,
  nextJs,
  nx,
  pnpm,
  postgreSql,
  prettier,
  react,
  sass,
  tailwindCss,
  typescript,
} from '../helpers/skills';
import { tag } from 'type-fest/source/opaque';

const portfolioSectionData = {
  config: {
    title: 'Publications & Preprint',
    slug: 'projects',
    icon: 'fa6-solid:book-open',
    visible: true,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  publications: [
    {name:"FIRST: Teach A Reliable Large Language Model Through Efficient Trustworthy Distillation",

      links:[website({url:"https://openreview.net/forum?id=IDXjH7Q8T4#discussion"})],
      details:[
        {label:"Contribution",value:["Second Author"]},
        {label:"Status",value:"Accepted in EMNLP 2024"},
      ],
      description:`
        - Pipeline for **efficient LLM training** for:
          - Reduced Miscalibration **-10%**
          - Improved Accuracy **+2.3%** 
        - Distillation with trustworthy maximization process
        - Substantially **reduced training data** size
      `,
      tagsList: {
        tags:[{name:"Efficient LLM"},{name:"Llama"},{name:"NLP"}]
      },
    },
    {name:"SR-TGAN: Smoke Removal with Temporal Generative Adversarial Models in Robot-assisted Surgery",

      links:[website({url:"https://openreview.net/forum?id=7WcuEZjMT9#discussion"})],
      details:[
        {label:"Contribution",value:["Co-first Author"]},
        {label:"Status",value:"Accepted in IEEE EMBS BHI 2024"},
      ],
      description:`
        - **Improved smoke removal** in live surgical feeds using sequence of frames
        - Separate Temporal Mechanisms compared in CycleGAN base skeleton:
          - Attention
          - Convolution
          - LSTM 
      `,
      tagsList: {
        tags:[{name:"Computer Vision"},{name:"CycleGAN"},{name:"Attention Mechanism"}, {name:"Medical Imaging"}]
      },
    },
    {name:"CycleGAN with mutual information loss constraint generates structurally aligned CT images from functional EIT images",

      links:[website({url:"https://ieeexplore.ieee.org/abstract/document/10340711"})],
      details:[
        {label:"Contribution",value:["First Author"]},
        {label:"Status",value:"Accepted in IEEE EMBC 2023"},
      ],
      description:`
        - Modified CycleGAN archictecture
        - Converted low resolution EIT images to high resolution CT images 
        - **Mutual Information loss** construction yielded **structurally aligned generated CT images** 
      `,
      tagsList: {
        tags:[{name:"Computer Vision"},{name:"CycleGAN"},{name:"Mutual Information"}, {name:"Medical Imaging"} , {name:"Healthcare Diagnostics"}]
      },
    },
    {name:"Prior information inference via Mutual Information constrained cycleGAN enhances EIT reconstruction",

      links:[website({url:"https://www.techrxiv.org/doi/full/10.36227/techrxiv.172564151.14300206"})],
      details:[
        {label:"Contribution",value:["First Author"]},
        {label:"Status",value:["Preprint TechRxiv","Results Pending IEEE JBH"]},
      ],
      description:`
        - An **extension journal** paper of **IEEE EMBC paper** 
        - Incorporates modified CycleGAN to infer **prior EIT image**
        - Dynamic Prior yields a better **final reconstructed EIT image** 
      `,
      tagsList: {
        tags:[{name:"Computer Vision"},{name:"CycleGAN"}, {name:"Medical Imaging"}]
      },
    },

    {name:"Silicon Content Prediction in Blast Furnace via Machine Learning: A Comprehensive Processing and Modeling Pipeline",

      links:[],
      details:[
        {label:"Contribution",value:["First Author"]},
        {label:"Status",value:["Review Stage in MDPI Materials"]},

      ],
      description:`
        - Forecast silicon content with **90 % accuracy** owing to:
          - Comprehensive **data processing pipeline** for **large scale industrial data**
          - Hyperparameter optimization
          - Model Selection involving NN, Xgboost & Time series Models
      `,
      tagsList: {
        tags:[{name:"Blast Furnace"}, {name:"Silicon Content"},{name:"Xgboost"},{name:"Time Series Models"}]
      },
    },
    {name:"Surgical Blender: A Synthetic Datat Generator for Robot-Assisted Surgery",

      links:[],
      details:[
        {label:"Contribution",value:["Second Author"]},
        {label:"Status",value:"Results pending in CBM Journal"},
      ],
      description:`
        - Experimented Improved metrics for CycleGAN using 
          - Carefully crafted **synthetic data**
          - Custom **IC & DC** Losses 
        - Potential to **alleviate the load** for **acquiring real medical images** in training tasks like smoke removal 
      `,
      tagsList: {
        tags:[{name:"Computer Vision"},{name:"CycleGAN"}, {name:"Medical Imaging"}]
      },
    },

  ],
  /*
  projects:[
    {
      name: 'Golden Bulls',
      image: import('@/assets/portfolio/project-1.jpeg'),
      dates: [new Date('2020-03'), null],
      details: [
        { label: 'Team size', value: '1 person' },
        { label: 'My role', value: ['Front-end Developer', 'Designer'] },
        { label: 'Company', value: 'None' },
        { label: 'Category', value: ['Web app', 'Open source'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://golden-bulls-d73jd7.netlify.app', url: '#' },
        { label: 'Repository', value: 'https://github.com/mark-freeman/golden-bulls', url: '#' },
      ],
      screenshots: [
        { src: import('@/assets/portfolio/project-1-screenshot-1.jpg'), alt: 'First screenshot' },
        { src: import('@/assets/portfolio/project-1-screenshot-2.jpg'), alt: 'Second screenshot' },
        { src: import('@/assets/portfolio/project-1-screenshot-3.jpg'), alt: 'Third screenshot' },
      ],
      description:
        'In tristique vulputate augue vel egestas. Quisque ac imperdiet tortor, at lacinia ex. Duis vel ex hendrerit, commodo odio sed, aliquam enim. Ut arcu nulla, tincidunt eget arcu eget, molestie vulputate nisi. Nunc malesuada leo et est iaculis facilisis.',
      tagsList: {
        title: 'Technologies',
        tags: [nextJs(), sass(), pnpm(), eslint(), prettier()],
      },
      links: [mockups({ url: '#' }), demo({ url: '#' })],
    },
    {
      name: 'TruQuest',
      image: import('@/assets/portfolio/project-2.jpeg'),
      dates: [new Date('2019-06'), new Date('2020-02')],
      details: [
        { label: 'Team size', value: '7 people' },
        { label: 'My role', value: ['Front-end Developer', 'Mobile Developer', 'Designer'] },
        { label: 'Company', value: 'Facebook' },
        { label: 'Category', value: ['Web app', 'Mobile app'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://tru-quest-ck7ea3.netlify.app', url: '#' },
        { label: 'Repository', value: 'https://github.com/mark-freeman/tru-quest', url: '#' },
      ],
      description:
        'Ut ultricies tortor at sodales aliquam. Vivamus metus ante, fringilla nec ligula in, suscipit rhoncus mauris. Praesent hendrerit velit odio, at accumsan urna faucibus convallis. Nunc at massa eget ligula volutpat dictum a sit amet libero. Vestibulum iaculis molestie maximus. In hac habitasse platea dictumst.',
      tagsList: {
        title: 'Technologies',
        tags: [react(), tailwindCss(), nestJs(), postgreSql()],
      },
      links: [mockups({ url: '#' }), demo({ url: '#' })],
    },
    {
      name: 'Software Chasers',
      image: import('@/assets/portfolio/project-3.jpeg'),
      dates: [new Date('2018-01'), new Date('2020-12')],
      details: [
        { label: 'Team size', value: '3 people' },
        { label: 'My role', value: ['Front-end Developer', 'Designer'] },
        { label: 'Company', value: 'None' },
        { label: 'Category', value: ['Web app', 'Open source'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://software-chasers-e82l8e.netlify.app', url: '#' },
        { label: 'Repository', value: 'https://github.com/mark-freeman/software-chasers', url: '#' },
      ],
      description:
        'Quisque id consectetur eros. In hac habitasse platea dictumst. Sed eu pulvinar orci. Mauris consequat, est in dignissim varius, neque nisl commodo mauris, id blandit risus justo eu nulla.',
      tagsList: {
        title: 'Technologies',
        tags: [react(), chakraUi(), typescript(), nx(), pnpm()],
      },
      links: [website({ url: '#' }), github({ url: '#' })],
    },
    {
      name: 'Disco Ninjas',
      image: import('@/assets/portfolio/project-4.jpeg'),
      dates: [new Date('2016-05'), new Date('2018-07')],
      details: [
        { label: 'Team size', value: '11 people' },
        { label: 'My role', value: 'Front-end Developer' },
        { label: 'Company', value: 'Google' },
        { label: 'Category', value: ['Mobile app', 'Open source'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://disco-ninjas-g321ol.netlify.app', url: '#' },
        { label: 'Repository', value: 'https://github.com/mark-freeman/disco-ninjas', url: '#' },
      ],
      description:
        'Praesent eu neque tortor. Vestibulum ac magna nisl. Vivamus massa sem, feugiat in pharetra non, convallis egestas purus. Ut consequat ullamcorper sem, in euismod nibh posuere ut. ',
      tagsList: {
        title: 'Technologies',
        tags: [typescript(), jest(), firebase()],
      },
      links: [mockups({ url: '#' }), github({ url: '#' })],
    
    },
  ],*/

} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
