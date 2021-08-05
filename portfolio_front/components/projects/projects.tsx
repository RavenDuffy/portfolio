import { DescBox, DescBoxWrapper } from '../desc-box'
import { Section } from '../section'
import { ProjectPreview } from './project-prev'
import styles from './projects.module.scss'

import logo from '../../public/images/logo/Magpie.png'

export const Projects = () => {
  return (
    <Section sectionName='projects'>
      <h1>My Projects</h1>
      <div className={styles.hrWrap}>
        <hr />
      </div>
      <DescBoxWrapper style={{ maxWidth: '1000px' }}>
        <DescBox full>
          <ProjectPreview name={'hello'} image={logo} />
        </DescBox>
        <DescBox full>
          <ProjectPreview name={'hello'} image={logo} />
        </DescBox>
        <DescBox full>
          <ProjectPreview name={'hello'} image={logo} />
        </DescBox>
        <DescBox full>
          <ProjectPreview name={'hello'} image={logo} />
        </DescBox>
      </DescBoxWrapper>
    </Section>
  )
}
