import React from 'react'
import {Text, View, StyleSheet, Image} from 'react-native'
import Card from "../shared/Card";
import {globalStyles, images} from "../styles/global";

const ReviewDetails = ({route}) => {

  const {title, body, rating} = route.params;

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{title}</Text>
        <Text>{body}</Text>
        <View style={styles.rating}>
          <Text>Gamezone rating: </Text>
          <Image source={images.ratings[rating]}/>
        </View>
      </Card>
    </View>
  )
};

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee'
  }
})

export default ReviewDetails
