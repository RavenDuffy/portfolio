interface ProjectPreviewProps {
  name: string
  image?: any
  style?: React.CSSProperties
}

export const ProjectPreview = ({ name, image, style }: ProjectPreviewProps) => {
  return (
    <div
      style={{
        backgroundImage: `url('${image.src}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        height: '100%',
        borderRadius: '10px',
      }}
    >
      <p>{name}</p>
    </div>
  )
}
