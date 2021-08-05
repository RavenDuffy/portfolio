interface ProjectPreviewProps {
  name: string
  image?: string
  link?: string
}

export const ProjectPreview = ({ name, image, link }: ProjectPreviewProps) => {
  return (
    <a href={link}>
      <div
        style={{
          backgroundImage: `url('${image}')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: '100%',
          height: '100%',
          borderRadius: '10px',
          position: 'relative',
          cursor: 'pointer',
        }}
      >
        <p
          style={{
            position: 'absolute',
            bottom: '1.5rem',
            right: '2rem',
            textShadow: '1px 1px 5px #000f',
          }}
        >
          {name}
        </p>
      </div>
    </a>
  )
}
