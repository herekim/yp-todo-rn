import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

const VTodoInput = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="할 일을 입력해주세요." />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>추가</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 15,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    marginRight: 10,
    padding: 10,
  },
  button: {
    backgroundColor: '#3D67FC',
    padding: 10,
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
})

export default VTodoInput
