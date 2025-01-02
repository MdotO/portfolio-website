import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  apolloGraphql,
  astro,
  aws,
  chakraUi,
  cpp,
  cypress,
  eslint,
  firebase,
  java,
  javascript,
  mongoDb,
  nestJs,
  pnpm,
  postgreSql,
  prettier,
  python,
  pytorch,
  react,
  sass,
  sql,
  supabase,
  tailwindCss,
  tensorflow,
  typescript,
} from '../helpers/skills';
import { levels } from 'astro/dist/core/logger/core';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      skills: [
        pytorch({level: 4}),
        tensorflow({level: 2, description: "Need to relearn a few things"}),
        aws({level:3, description:"Mainly SageMaker"}),
        
        python({level:4}),
        javascript({level:3,description:"Will need to freshen up"}),
        react({
          level: 3,
          description:
            'Includes React Native and Electron. Will need to freshen up',
        }),
        typescript({
          level: 2,
          description: 'Learning',
        }),
        cpp({level:3}),
        java({level:2, description:"Includes Android Studio"}),
        sql({level:3, description:"Need to freshen up!"}),
        firebase({ level: 1 }),
      ],
    },

    {
      title: 'I speak',
      skills: [
        { icon: 'circle-flags:us', name: 'English - fluent' },
        { icon: 'circle-flags:pk', name: 'Urdu - native' },
        { icon: 'circle-flags:pk', name: 'Punjabi - C1' },

      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
