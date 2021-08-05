interface ProjectPreviewProps {
  name: string
  image?: string
  link?: string
}

export const ProjectPreview = ({ name, image, link }: ProjectPreviewProps) => {
  return (
    <div
      style={{
        backgroundImage: `url('${image}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        position: 'relative',
      }}
    >
      <a
        href={link}
        style={{ position: 'absolute', bottom: '2rem', right: '2rem' }}
      >
        {name}
      </a>
    </div>
  )
}
