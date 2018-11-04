import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  innerText: { flex: 1, textAlign: 'center' }
})

export default class extends Component {
  state = {}

  getContainerStyles() {
    return {
      ...styles.container,
      ...this.props.style,
      backgroundColor: this.props.backgroundColor || 'transparent'
    }
  }

  getTextStyles() {
    return {
      ...styles.innerText,
      color: this.props.textColor || '#fff',
      fontSize: this.props.textSize || 30
    }
  }

  render() {
    return (
      <View style={this.getContainerStyles()}>
        <Text style={this.getTextStyles()} onPress={this.props.onDecrement}>-</Text>
        <Text style={this.getTextStyles()}>{this.props.amount} {this.props.hint || ''}</Text>
        <Text style={this.getTextStyles()} onPress={this.props.onIncrement}>+</Text>
      </View>
    )
  }
}
