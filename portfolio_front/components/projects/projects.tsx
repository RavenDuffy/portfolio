import { DescBox, DescBoxWrapper } from '../desc-box'
import { Section } from '../section'
import { ProjectPreview } from './project-prev'
import styles from './projects.module.scss'

import GitStatsImg from '../../public/images/projects/GithubStats.png'
import SpaceImg from '../../public/images/projects/s.png'
import PongImg from '../../public/images/projects/pong.gif'

export const Projects = () => {
  return (
    <Section
      sectionName='projects'
      id='projects'
      externalPadding
      style={{ backgroundColor: '#20282b' }}
    >
      <div className={styles.titleWrap}>
        <h1>My Projects</h1>
        <div className={styles.hrWrap}>
          <hr />
        </div>
      </div>
      <DescBoxWrapper style={{ maxWidth: '1000px' }}>
        <DescBox full>
          <ProjectPreview
            name={'Github Stats'}
            image={GitStatsImg.src}
            link={'https://github.com/RavenDuffy/GitHub-Stats'}
            backColor={'#0f0f0f'}
          />
        </DescBox>
        <DescBox full>
          <ProjectPreview
            name={'Gravitational Law Simulator'}
            image={SpaceImg.src}
            link={'https://github.com/RavenDuffy/GravitationalLawSim'}
            backColor={'#000'}
          />
        </DescBox>
        <DescBox full>
          <ProjectPreview
            name={'Pong Syllabus'}
            image={PongImg.src}
            link={'https://github.com/RavenDuffy/Pong-Syllabus'}
            backColor={'#000'}
          />
        </DescBox>
      </DescBoxWrapper>
    </Section>
  )
}
