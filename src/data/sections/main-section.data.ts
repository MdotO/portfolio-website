import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, googleScholar, linkedin} from '../helpers/links';

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
    { label: 'Email', value: 'raza12@purdue.edu', url: 'mailto:raza12@purdue.edu' },
    { label: 'From', value: 'Lahore, Pakistan' },
  ],
  pdfDetails: [
  ],

  description:
    // '[WIP - Currently Working on Populating my website. Current Available content is accurate]'
    `**Machine Learning Researchist\nRobust background in Software Engineering and MLOps.\
    \nEager to contribute to cutting-edge ML research.\
    \nFeel free to connect on my social networks, collaborate or just geek out over ML!**`,
  tags: [{ name: 'Open for Research collaboration' }, { name: 'Machine Learning' }, { name: 'Artificial Intelligence' }],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'Omer\'s CV.pdf',
  },
  links: [googleScholar({url:"https://scholar.google.com/citations?user=oPbPzGgAAAAJ&hl=en"}),
   github({ url: 'https://github.com/MdotO' }),
  linkedin({ url: 'https://www.linkedin.com/in/omer-raza-aa045219a/' }),
  facebook({ url: 'https://www.facebook.com/MdotOmer' }), 
  ],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
