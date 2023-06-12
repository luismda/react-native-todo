import { useState } from 'react'
import { 
  TextInput as NativeTextInput, 
  TextInputProps as NativeTextInputProps 
} from 'react-native'

import { styles } from './styles'

interface TextInputProps extends NativeTextInputProps {}

export function TextInput(props: TextInputProps) {
  const [hasInputFocus, setHasInputFocus] = useState(false)

  return (
    <NativeTextInput 
      placeholderTextColor="#808080"
      cursorColor="#F2F2F2"
      style={
        hasInputFocus 
          ? {...styles.input, ...styles.inputBorderColorOnFocus} 
          : styles.input
      }
      onFocus={() => setHasInputFocus(true)}
      onBlur={() => setHasInputFocus(false)}
      {...props}
    />
  )
}