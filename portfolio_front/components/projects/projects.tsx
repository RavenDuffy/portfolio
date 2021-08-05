import { DescBox, DescBoxWrapper } from '../desc-box'
import { Section } from '../section'
import styles from './projects.module.scss'

export const Projects = () => {
  return (
    <Section sectionName='projects'>
      <h1>My Projects</h1>
      <div className={styles.hrWrap}>
        <hr />
      </div>
      <DescBoxWrapper style={{ maxWidth: '1000px' }}>
        <DescBox>[project]</DescBox>
        <DescBox>[project]</DescBox>
        <DescBox>[project]</DescBox>
        <DescBox>[project]</DescBox>
      </DescBoxWrapper>
    </Section>
  )
}
