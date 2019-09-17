interface IEducationItem {
  course: string
  degree: string
  endYear: number
  startYear: number
  thesisUrl: string
  university: string
}

const educationList: IEducationItem[] = [
  {
    course: 'Computer Science',
    degree: "Bachelor's Degree",
    endYear: 2014,
    startYear: 2009,
    thesisUrl:
      'https://drive.google.com/file/d/0B-RWB54HnvoITjZQWTR5bmZJRDg/view?usp=drive_web',
    university: 'Federal University of Espírito Santo',
  },
  {
    course: 'Computer Science',
    degree: "Master's Degree",
    endYear: 2017,
    startYear: 2014,
    thesisUrl:
      'https://drive.google.com/file/d/0B-RWB54HnvoIY2M1aTUxUGtQQU0/view',
    university: 'Federal University of Espírito Santo',
  },
]

export default educationList
