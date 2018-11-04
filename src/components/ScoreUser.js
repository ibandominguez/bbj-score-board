import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { ScoreButton } from '../components'

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' },
  innerText: { flex: 1, textAlign: 'center', textAlignVertical: 'center' }
})

export default class extends Component {
  state = {}

  getContainerStyles() {
    return {
      ...styles.container,
      backgroundColor: this.props.backgroundColor || '#000'
    }
  }

  getTextStyles(fontSize) {
    return {
      ...styles.innerText,
      fontSize: fontSize || 30,
      color: this.props.textColor || '#fff'
    }
  }

  render() {
    return (
      <View style={this.getContainerStyles()}>
        <Text style={this.getTextStyles(60)}>{this.props.points}</Text>
        <ScoreButton onDecrement={this.props.onAdvDecrement} onIncrement={this.props.onAdvIncrement} style={{ flex: 0.5 }} textSize={15} amount={this.props.adv} hint={'(ADV)'} />
        <ScoreButton onDecrement={this.props.onPenDecrement} onIncrement={this.props.onPenIncrement} style={{ flex: 0.5 }} textSize={15} amount={this.props.pen} hint={'(PEN)'} />
      </View>
    )
  }
}
