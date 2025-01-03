import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'Masters degree in Computer Science',
      institution: 'Purdue University Northwest',
      image: import('@/assets/logos/purdue.jpg'),
      dates: [new Date('2023.09'), new Date('2025.05')],
      description: '• 4.0 GPA thus far    ¯\_(ツ)_/¯',
      links: [website({ url: 'https://www.pnw.edu/' })],
    },
    {
      title: 'Bachelors degree in Computer Science',
      institution: 'The University of Hong Kong',
      image: import('@/assets/logos/hku-logo.jpg'),
      dates: [new Date('2016.09'), new Date('2020.05')],
      description: '• First Class Honors\n\
       • Deans Honor List in 2016-2017 & 2019-2020\n\
       • HKU Foundation Scholarship 2016-2020 (for outstanding undergrads)\n\
       • Young Tsun Dart Scholarship 2017 (reserved for only one student in a particular year of study)',
      links: [website({ url: 'https://www.hku.hk/' })],
    },
    {
      title: 'Bachelors degree in Computer Science',
      institution: 'Tufts University',
      image: import('@/assets/logos/Tufts.jpg'),
      dates: [new Date('2018.08'), new Date('2018.12')],
      description: '• Exchange Program',
      links: [website({ url: 'https://www.tufts.edu/' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
