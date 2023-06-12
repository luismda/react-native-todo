import { View, Text, Image } from 'react-native'

import clipboardImg from '../../assets/clipboard.png'

import { styles } from './styles'

export function EmptyTaskList() {
  return (
    <View style={styles.emptyList}>
      <Image 
        source={clipboardImg} 
        alt="" 
        style={styles.clipboardImage}  
      />

      <View style={styles.emptyListInfo}>
        <Text style={styles.emptyListBoldText}>
          Você ainda não tem tarefas cadastradas.
        </Text>
        <Text style={styles.emptyListText}>
          Crie tarefas e organize seus itens a fazer!
        </Text>
      </View>
    </View>
  )
}