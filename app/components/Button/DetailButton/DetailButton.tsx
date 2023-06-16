import VDetailButton from './VDetailButton'

interface DetailButtonProps {
  size?: number
  color?: string
  onPress: (props: unknown) => void
}

const DetailButton = (props: DetailButtonProps) => {
  return <VDetailButton {...props} />
}

export default DetailButton
