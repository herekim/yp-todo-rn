import { TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'

interface VDetailButtonProps {
  size?: number
  color?: string
  onPress: (props: unknown) => void
}

const VDetailButton = ({
  size = 20,
  color = 'lightgray',
  onPress,
}: VDetailButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Entypo name="dots-three-horizontal" size={size} color={color} />
    </TouchableOpacity>
  )
}

export default VDetailButton
