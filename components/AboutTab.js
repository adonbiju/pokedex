import { View ,Text, StyleSheet } from "react-native"
import React from 'react'
import { calculateHeight,calculateweight } from "../Calculation/Calculation";

const AboutTab = (props) => {
  const { navigation, route: { params } } = props;
  const abilities = params.abilities.map(({ ability }) => ability.name).join(', ')
  const { feet, cm } = calculateHeight(params.height)
  const { lbs, kg } = calculateweight(params.weight)
  return (
    
    <View style={styles.container}>
    <Text style={styles.title}>{params.name}</Text>
    <View style={styles.wrapper}>
        <Text style={styles.label}>Weight:</Text>
        <Text>{lbs} {kg}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.label}>Height:</Text>
        <Text>{feet} {cm}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.label}>Abilities:</Text>
        <Text style={styles.value}>{abilities}</Text>
      </View>
      
  </View>
  )
}

export default AboutTab



const styles = StyleSheet.create({
  container: {
    paddingVertical: 25,
    marginLeft:15
  },  
  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
    marginLeft:10
  },
  label: {
    minWidth: 110,
    color:"#705848"
  },
  value: {
    textTransform: 'capitalize',
  }
})