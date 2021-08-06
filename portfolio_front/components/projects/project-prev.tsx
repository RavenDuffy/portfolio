interface ProjectPreviewProps {
  name: string
  image?: string
  link?: string
  backColor?: string
}

export const ProjectPreview = ({
  name,
  image,
  link,
  backColor,
}: ProjectPreviewProps) => {
  return (
    <a href={link} target='_blank' rel='noreferrer'>
      <div
        style={{
          backgroundImage: `url('${image}')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto',
          backgroundPosition: 'center',
          backgroundColor: backColor || 'transparent',
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
