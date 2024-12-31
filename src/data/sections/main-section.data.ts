import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, linkedin, twitter } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/my-image.jpeg'),
  fullName: 'Muhammad Omer Raza',
  role: 'Machine Learning Researcher & Engineer',
  details: [
    { label: 'Phone', value: '219 238 8367', url: 'tel:219 238 8367' },
    { label: 'Email', value: 'omarraza23.12@gmail.com', url: 'mailto:omarraza23.12@gmail.com' },
    { label: 'From', value: 'Lahore, Pakistan' },
  ],
  pdfDetails: [
  ],

  description:
    ' Work in Porgress. Results-driven Machine Learning Engineer and Researcher with a robust background in Software Engineering. I have led and developed a range of machine learning projects and tools accompanied by backend and frontend solutions, like mobile apps. My professional journey is deeply rooted with ML research and publications, demonstrating a commitment to holistic professional growth and driving knowledge. With a passion for continuous learning and a drive for excellence, I am eager to contribute to cutting-edge ML research.',
  tags: [{ name: 'Open for Research collaboration' }, { name: 'Machine Learning' }, { name: 'Artificial Intelligence' }],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'Omer\'s CV.pdf',
  },
  links: [facebook({ url: '#' }), github({ url: '#' }), linkedin({ url: '#' }), twitter({ url: '#' })],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
