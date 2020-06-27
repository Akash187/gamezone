import {withNavigation} from '@react-navigation/compat'
import React from 'react'
import {TouchableOpacity, View, StyleSheet} from 'react-native'
import {AntDesign} from "@expo/vector-icons";

const DrawerIcon = ({navigation}) => {
  return (
    <View style={styles.drawerIcon}>
      <TouchableOpacity>
        <AntDesign name="bars" size={24} color="white" onPress={() => navigation.openDrawer()}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  drawerIcon: {
    marginLeft: 16
  }
})

export default withNavigation(DrawerIcon)
