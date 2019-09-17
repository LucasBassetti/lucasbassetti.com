import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import educationList from '../../../constants/education_list'
import {
  experienceList,
  volunteerExperienceList,
} from '../../../constants/experience_list'
import EducationItem from '../EducationItem'
import ExperienceItem from '../ExperienceItem'
import * as S from './styled'

const About = () => {
  const {
    a4pmImage,
    anttImage,
    cativaImage,
    dinelyImage,
    institutoElevarImage,
    integrationAlphaImage,
    padtecImage,
    partioImage,
    prppgImage,
    sharetempusImage,
    trainEffectiveImage,
    yachtlifeImage,
  } = useStaticQuery(
    graphql`
      fragment squareImage on File {
        childImageSharp {
          fixed(width: 64, height: 64) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      query {
        a4pmImage: file(relativePath: { eq: "experience/a4pm.jpg" }) {
          ...squareImage
        }
        anttImage: file(relativePath: { eq: "experience/antt.jpg" }) {
          ...squareImage
        }
        cativaImage: file(relativePath: { eq: "experience/cativa.jpg" }) {
          ...squareImage
        }
        dinelyImage: file(relativePath: { eq: "experience/dinely.jpg" }) {
          ...squareImage
        }
        institutoElevarImage: file(
          relativePath: { eq: "experience/instituto_elevar.jpg" }
        ) {
          ...squareImage
        }
        integrationAlphaImage: file(
          relativePath: { eq: "experience/integration_alpha.jpg" }
        ) {
          ...squareImage
        }
        padtecImage: file(relativePath: { eq: "experience/padtec.jpg" }) {
          ...squareImage
        }
        partioImage: file(relativePath: { eq: "experience/partio.jpg" }) {
          ...squareImage
        }
        prppgImage: file(relativePath: { eq: "experience/prppg.jpg" }) {
          ...squareImage
        }
        sharetempusImage: file(
          relativePath: { eq: "experience/sharetempus.jpg" }
        ) {
          ...squareImage
        }
        trainEffectiveImage: file(
          relativePath: { eq: "experience/train_effective.jpg" }
        ) {
          ...squareImage
        }
        yachtlifeImage: file(relativePath: { eq: "experience/yachtlife.jpg" }) {
          ...squareImage
        }
      }
    `
  )

  const images: any = {
    a4pmImage: a4pmImage.childImageSharp.fixed,
    anttImage: anttImage.childImageSharp.fixed,
    cativaImage: cativaImage.childImageSharp.fixed,
    dinelyImage: dinelyImage.childImageSharp.fixed,
    institutoElevarImage: institutoElevarImage.childImageSharp.fixed,
    integrationAlphaImage: integrationAlphaImage.childImageSharp.fixed,
    padtecImage: padtecImage.childImageSharp.fixed,
    partioImage: partioImage.childImageSharp.fixed,
    prppgImage: prppgImage.childImageSharp.fixed,
    sharetempusImage: sharetempusImage.childImageSharp.fixed,
    trainEffectiveImage: trainEffectiveImage.childImageSharp.fixed,
    yachtlifeImage: yachtlifeImage.childImageSharp.fixed,
  }

  return (
    <S.AboutWrapper>
      <S.AboutTitle>Education</S.AboutTitle>
      <div>
        {educationList.map(educationItem => (
          <EducationItem
            key={educationItem.degree}
            course={educationItem.course}
            degree={educationItem.degree}
            endYear={educationItem.endYear}
            startYear={educationItem.startYear}
            thesisUrl={educationItem.thesisUrl}
            university={educationItem.university}
          />
        ))}
      </div>
      <S.AboutTitle>Volunteer Experience</S.AboutTitle>
      <div>
        {volunteerExperienceList.map(experienceItem => (
          <ExperienceItem
            key={experienceItem.company}
            date={experienceItem.date}
            position={experienceItem.position}
            tech={experienceItem.tech}
            company={experienceItem.company}
            companyImage={images[experienceItem.companyImageKey]}
            companyUrl={experienceItem.companyUrl}
          />
        ))}
      </div>
      <S.AboutTitle>Experience</S.AboutTitle>
      <div>
        {experienceList.map(experienceItem => (
          <ExperienceItem
            key={experienceItem.company}
            date={experienceItem.date}
            position={experienceItem.position}
            tech={experienceItem.tech}
            company={experienceItem.company}
            companyImage={images[experienceItem.companyImageKey]}
            companyUrl={experienceItem.companyUrl}
          />
        ))}
      </div>
    </S.AboutWrapper>
  )
}

export default About
