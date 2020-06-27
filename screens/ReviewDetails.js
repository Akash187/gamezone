import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import Card from "../shared/Card";

const ReviewDetails = ({route, navigation}) => {

  const {title, body, rating} = route.params;

  return (
    <View style={styles.container}>
      <Card>
        <Text>{title}</Text>
        <Text>{body}</Text>
        <Text>{rating}</Text>
      </Card>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    padding: 24
  }
});

export default ReviewDetails
