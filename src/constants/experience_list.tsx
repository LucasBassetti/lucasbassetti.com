export type Tech =
  | 'Angular'
  | 'AWS'
  | 'BlazeJS'
  | 'C#'
  | 'Conceptual Modeling'
  | 'Firebase'
  | 'GraphQL'
  | 'JavaScript'
  | 'Less'
  | 'Meteor'
  | 'MongoDB'
  | 'Netlify'
  | 'NodeJS'
  | 'React'
  | 'React Native'
  | 'Redux'
  | 'Sass'
  | 'SQL'
  | 'TypeScript'
  | 'NextJS'
  | 'Jest'
  | 'Tailwind CSS'

interface IExperienceItem {
  date: string
  position: string
  tech: Tech[]
  company: string
  companyImageKey: string
  companyUrl: string
}

export const volunteerExperienceList: IExperienceItem[] = [
  {
    date: '2018 - 2021',
    position: 'Full Stack Developer',
    tech: ['Netlify', 'React'],
    company: 'Instituto Elevar',
    companyImageKey: 'institutoElevarImage',
    companyUrl: 'https://institutoelevar.com.br/',
  },
]

export const experienceList: IExperienceItem[] = [
  {
    date: '2023 - Present',
    position: 'Senior Frontend Developer',
    tech: ['NextJS', 'React', 'TypeScript', 'Jest', 'GraphQL', 'Tailwind CSS'],
    company: 'Scope3',
    companyImageKey: 'scope3Image',
    companyUrl: 'https://scope3.com',
  },
  {
    date: '2020 - 2023',
    position: 'Senior Software Engineer',
    tech: ['NextJS', 'React', 'TypeScript', 'Jest'],
    company: 'X-Team',
    companyImageKey: 'xteamImage',
    companyUrl: 'https://x-team.com',
  },
  {
    date: '2021 - 2023',
    position: 'Senior Software Engineer',
    tech: ['React', 'TypeScript', 'Jest', 'NodeJS'],
    company: 'Riot Games',
    companyImageKey: 'riotImage',
    companyUrl: 'https://www.riotgames.com/',
  },
  {
    date: '2019 - 2020',
    position: 'Frontend Developer',
    tech: ['AWS', 'Less', 'React', 'Redux', 'TypeScript'],
    company: 'YachtLife',
    companyImageKey: 'yachtlifeImage',
    companyUrl: 'https://yachtlife.com',
  },
  {
    date: '2018 - 2019',
    position: 'Mobile Developer',
    tech: ['React Native', 'Redux'],
    company: 'dinely',
    companyImageKey: 'dinelyImage',
    companyUrl: 'https://dinely.app/',
  },
  {
    date: '2018 - 2018',
    position: 'Full Stack Developer',
    tech: [
      'Firebase',
      'NodeJS',
      'React',
      'React Native',
      'Redux',
      'Sass',
      'SQL',
    ],
    company: 'Train Effective',
    companyImageKey: 'trainEffectiveImage',
    companyUrl: 'https://traineffective.com/',
  },
  {
    date: '2017 - 2018',
    position: 'Frontend Developer',
    tech: ['GraphQL', 'Meteor', 'React', 'Redux'],
    company: 'Integration Alpha',
    companyImageKey: 'integrationAlphaImage',
    companyUrl: 'https://integrationalpha.com/',
  },
  {
    date: '2017 - 2018',
    position: 'Full Stack Developer',
    tech: ['Meteor', 'NodeJS', 'MongoDB', 'React', 'Redux'],
    company: 'ShareTempus',
    companyImageKey: 'sharetempusImage',
    companyUrl: 'https://sharetempus.com',
  },
  {
    date: '2016 - 2017',
    position: 'Frontend Developer',
    tech: ['Angular', 'React', 'Redux', 'SQL'],
    company: 'A4PM',
    companyImageKey: 'a4pmImage',
    companyUrl: 'https://a4pm.com.br',
  },
  {
    date: '2015 - 2016',
    position: 'Frontend Developer',
    tech: ['Meteor', 'BlazeJS'],
    company: 'Partio',
    companyImageKey: 'partioImage',
    companyUrl: 'https://partio.app',
  },
  {
    date: '2014 - 2015',
    position: 'Software Enginnering',
    tech: ['Conceptual Modeling', 'JavaScript'],
    company: 'Padtec',
    companyImageKey: 'padtecImage',
    companyUrl: 'https://padtec.com.br/',
  },
  {
    date: '2014 - 2014',
    position: 'Web Developer',
    tech: ['JavaScript', 'C#'],
    company: 'Cativa Imagem',
    companyImageKey: 'cativaImage',
    companyUrl: 'http://www.cativaimagem.com.br/',
  },
  {
    date: '2011 - 2013',
    position: 'Software Enginnering',
    tech: ['Conceptual Modeling', 'JavaScript'],
    company: 'MGIC Project, ANTT',
    companyImageKey: 'anttImage',
    companyUrl: 'http://www.antt.gov.br/',
  },
  {
    date: '2011 - 2011',
    position: 'Web Developer',
    tech: ['JavaScript'],
    company: 'PRPPG',
    companyImageKey: 'prppgImage',
    companyUrl: 'http://prppg.ufes.br/',
  },
]

export default experienceList
