import VAddButton from './VAddButton'

interface AddButtonProps {
  size: number
  color: string
  style?: unknown
  onPress: () => void
}

const AddButton = (props: AddButtonProps) => {
  return <VAddButton {...props} />
}

export default AddButton
