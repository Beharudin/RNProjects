import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const ListItems = ({item, deletHandler}) => {
  return (
    <TouchableOpacity style={styles.item} onPress={()=>deletHandler(item.key)}>
      <Text>{item.text}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderRadius: 10,
        borderStyle: 'dashed',
        borderWidth: 1
    }
})

export default ListItems
