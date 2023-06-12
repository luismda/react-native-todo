import { View, TouchableOpacity, Text } from 'react-native'
import { Trash, Check } from 'phosphor-react-native'

import { styles } from './styles'

interface TaskProps {
  name: string
  isCompleted?: boolean
  onCheckedChange: () => void
  onRemove: () => void
}

export function Task({ 
  name, 
  isCompleted = false, 
  onCheckedChange, 
  onRemove 
}: TaskProps) {
  return (
    <View style={styles.container}>
      {isCompleted ? (
        <TouchableOpacity 
          style={styles.checkboxMarked}
          accessibilityLabel="Desmarcar tarefa como completa"
          onPress={onCheckedChange}
        >
          <Check size={12} color="#F2F2F2" weight="bold" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity 
          style={styles.checkbox}
          accessibilityLabel="Marcar tarefa como completa"
          onPress={onCheckedChange}
        />
      )}

      <Text style={styles[isCompleted ? 'taskNameMarked' : 'taskName']}>
        {name}
      </Text>

      <TouchableOpacity 
        style={styles.removeButton}
        accessibilityLabel="Remover tarefa da lista"
        onPress={onRemove}
      >
        <Trash size={24} color="#808080" />
      </TouchableOpacity>
    </View>
  )
}
