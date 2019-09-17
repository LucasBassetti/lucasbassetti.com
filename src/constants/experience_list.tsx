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
    date: '2018 - Present',
    position: 'Full Stack Developer',
    tech: ['Netlify', 'React'],
    company: 'Instituto Elevar',
    companyImageKey: 'institutoElevarImage',
    companyUrl: 'https://institutoelevar.com.br/',
  },
]

export const experienceList: IExperienceItem[] = [
  {
    date: '2019 - Present',
    position: 'Front-end Developer',
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
    position: 'Front-end Developer',
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
    position: 'Front-end Developer',
    tech: ['Angular', 'React', 'Redux', 'SQL'],
    company: 'A4PM',
    companyImageKey: 'a4pmImage',
    companyUrl: 'https://a4pm.com.br',
  },
  {
    date: '2015 - 2016',
    position: 'Front-end Developer',
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
