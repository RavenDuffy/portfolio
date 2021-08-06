import { DescBox, DescBoxWrapper } from '../desc-box'
import { Section } from '../section'
import { ProjectPreview } from './project-prev'
import styles from './projects.module.scss'

import GitStatsImg from '../../public/images/projects/GithubStats.png'

export const Projects = () => {
  return (
    <Section sectionName='projects' id='projects' isWidthCapped>
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
      </DescBoxWrapper>
    </Section>
  )
}