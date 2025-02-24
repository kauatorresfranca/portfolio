import { TagContainer } from './styles'

type Props = {
  children: string
  tagType: 'react' | 'ts' | 'js' | 'css'
}

const tagColors = {
  react: '#61DAFB',
  ts: '#3178C6',
  js: '#F7DF1E',
  css: '#264de4'
}

const Tag = ({ children, tagType }: Props) => {

  return (
    <TagContainer color={tagColors[tagType] || "#ddd"}>{children}</TagContainer>
  )
}

export default Tag
