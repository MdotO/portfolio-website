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
      title: 'Computer Science',
      institution: 'The University of Hong Kong',
      image: import('@/assets/logos/hku-logo.jpg'),
      dates: [new Date('2016.09'), new Date('2020.05')],
      description: 'Bachelors degree in Engineering',
      links: [website({ url: 'https://www.hku.hk/' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
