import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text, Picker } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class extends Component {
  static propTypes = {
    onReset: PropTypes.func.isRequired
  }

  state = {
    selectedTimer: 300,
    countdownSeconds: 300,
    running: false
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      if (this.state.running && this.state.countdownSeconds > 0) {
        this.setState({ countdownSeconds: this.state.countdownSeconds - 1 })
      }
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  secondsToString() {
    let countdownSeconds = this.state.countdownSeconds
    let minutes = Math.floor(countdownSeconds / 60)
    let seconds = countdownSeconds - (minutes * 60)

    if (minutes < 10) {
      minutes = `0${minutes}`
    }

    if (seconds < 10) {
      seconds = `0${seconds}`
    }

    return `${minutes}:${seconds}`
  }

  toggleRunning() {
    this.setState({ running: !this.state.running })
  }

  resetTimer() {
    this.setState({ running: false, countdownSeconds: this.state.selectedTimer })
    this.props.onReset()
  }

  isCountdownOn() {
    return this.state.countdownSeconds > 0
  }

  getTimeStyles() {
    return {
      color: this.state.countdownSeconds < 60 ? 'red' : '#555'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Icon onPress={this.resetTimer.bind(this)} style={styles.button} size={40} name={'md-sync'} />
        <Picker
          selectedValue={this.state.selectedTimer}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) => this.setState({ selectedTimer: itemValue, countdownSeconds: itemValue })}
        >
          <Picker.Item label="5min" value={300} />
          <Picker.Item label="6min" value={360} />
          <Picker.Item label="7min" value={420} />
          <Picker.Item label="8min" value={480} />
          <Picker.Item label="9min" value={540} />
          <Picker.Item label="10min" value={600} />
        </Picker>
        <Text style={[styles.time, this.getTimeStyles()]}>{this.secondsToString()}</Text>
        {this.isCountdownOn() && <Icon onPress={this.toggleRunning.bind(this)} style={styles.button} size={40} name={this.state.running ? 'md-pause' : 'md-play'} />}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', borderRadius: 5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  time: { flex: 1, fontSize: 40, textAlign: 'center' },
  button: { padding: 10, backgroundColor: '#ddd' }
})
