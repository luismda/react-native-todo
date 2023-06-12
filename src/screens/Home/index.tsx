import { useState } from 'react'
import { View, TouchableOpacity, Text, Alert, FlatList } from 'react-native'
import { PlusCircle } from 'phosphor-react-native'

import LogoImg from '../../assets/logo.svg'

import { styles } from './styles'

import { EmptyTaskList } from '../../components/EmptyTaskList'
import { TextInput } from '../../components/TextInput'
import { Task } from '../../components/Task'

type Task = {
  id: string
  name: string
  isCompleted: boolean
}

export function Home() {
  const [taskName, setTaskName] = useState('')
  const [tasks, setTasks] = useState<Task[]>([])

  function handleAddNewTask() {
    if (taskName.trim().length === 0) {
      return Alert.alert('Adicionar tarefa', 'Informe um nome para adicionar sua tarefa!')
    }

    const newTask: Task = {
      id: String(tasks.length),
      name: taskName,
      isCompleted: false,
    }

    setTasks((prevState) => [newTask, ...prevState])
    setTaskName('')
  }

  function handleToggleCompleteTask(id: string) {
    setTasks((prevState) => prevState.map((task) => {
      if (task.id === id) {
        return { 
          ...task, 
          isCompleted: !task.isCompleted,
        }
      }

      return task
    }))
  }

  function removeTask(id: string) {
    setTasks((prevState) => prevState.filter((task) => {
      return task.id !== id
    }))
  }

  function handleRemoveTask(id: string) {
    Alert.alert('Remover tarefa', 'Você realmente deseja remover essa tarefa?', [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Remover',
        onPress: () => removeTask(id),
      },
    ])
  }

  const totalTasks = tasks.length

  const totalCompletedTasks = tasks.reduce((acc, task) => {
    return task.isCompleted ? acc + 1 : acc
  }, 0)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LogoImg />
      </View>

      <View style={styles.form}>
        <TextInput 
          accessibilityLabel="Informe o nome da tarefa a ser adicionada"
          placeholder="Adicione uma nova tarefa"
          value={taskName}
          onChangeText={setTaskName}
        />

        <TouchableOpacity 
          style={styles.button} 
          accessibilityLabel="Adicionar tarefa na lista"
          onPress={handleAddNewTask}
        >
          <PlusCircle size={16} color="#F2F2F2" weight="bold" />
        </TouchableOpacity>
      </View>

      <View style={styles.metrics}>
        <View style={styles.counter}>
          <Text style={styles.createdText}>
            Criadas
          </Text>
          <Text style={styles.counterText}>
            {totalTasks}
          </Text>
        </View>

        <View style={styles.counter}>
          <Text style={styles.completedText}>
            Concluídas
          </Text>
          <Text style={styles.counterText}>
            {totalCompletedTasks}
          </Text>
        </View>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: { id, name, isCompleted } }) => (
          <Task 
            name={name} 
            isCompleted={isCompleted}
            onCheckedChange={() => handleToggleCompleteTask(id)}
            onRemove={() => handleRemoveTask(id)}
          />
        )}
        ListEmptyComponent={EmptyTaskList}
        style={styles.taskList}
      /> 
    </View>
  )
}
