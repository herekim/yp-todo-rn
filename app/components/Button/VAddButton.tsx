import { TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

interface VAddButtonProps {
  size: number
  color: string
  style?: unknown
  onPress: () => void
}

const VAddButton = ({ size, color, style, onPress }: VAddButtonProps) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <AntDesign name="pluscircle" size={size} color={color} />
    </TouchableOpacity>
  )
}

export default VAddButton
