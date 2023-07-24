import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { globalStyles } from '../styles/Global'
import ReviewForm from '../Global/ReviewForm'

const ReviewDetails = () => {
  return (
    <View style={globalStyles.container}>
      <Text>Review Details page</Text>
      <ReviewForm />
    </View>
  )
}


export default ReviewDetails