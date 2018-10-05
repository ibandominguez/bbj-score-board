import React, { Component } from 'react'
import { Dimensions, StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import { Avatar, Timer } from './src/components'

const { width } = Dimensions.get('window')
const padding = width * 0.025
const separation = padding / 2

export default class App extends Component {
  state = {
    pointsOne: 0,
    advantagesOne: 0,
    pointsTwo: 0,
    advantagesTwo: 0
  }

  resetMatch() {
    this.setState({
      pointsOne: 0,
      advantagesOne: 0,
      pointsTwo: 0,
      advantagesTwo: 0
    })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.sponsorsView}>
          <Image style={{ height: 50, width: 50, resizeMode: 'contain' }} source={require('./src/assets/images/logo.png')} />
          <Image style={{ height: 50, width: 100, resizeMode: 'contain' }} source={require('./src/assets/images/novauniao.png')} />
        </View>

        <View style={styles.container}>
          <View style={styles.gridView}>
            <Avatar
              points={this.state.pointsOne}
              advantages={this.state.advantagesOne}
              style={{ marginRight: separation }}
              title={'Felipe'}
              image={require('./src/assets/images/felipe.png')}
              onPointUp={() => this.setState({ pointsOne: this.state.pointsOne + 1 })}
              onPointDown={() => this.setState({ pointsOne: this.state.pointsOne - 1 })}
              onAdvantageUp={() => this.setState({ advantagesOne: this.state.advantagesOne + 1 })}
              onAdvantageDown={() => this.setState({ advantagesOne: this.state.advantagesOne - 1 })}
            />

            <Avatar
              points={this.state.pointsTwo}
              advantages={this.state.advantagesTwo}
              title={'Joan'}
              image={require('./src/assets/images/joan.png')}
              onPointUp={() => this.setState({ pointsTwo: this.state.pointsTwo + 1 })}
              onPointDown={() => this.setState({ pointsTwo: this.state.pointsTwo - 1 })}
              onAdvantageUp={() => this.setState({ advantagesTwo: this.state.advantagesTwo + 1 })}
              onAdvantageDown={() => this.setState({ advantagesTwo: this.state.advantagesTwo - 1 })}
            />
          </View>

          <Timer onReset={this.resetMatch.bind(this)} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding },
  gridView: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: separation },
  sponsorsView: { padding, backgroundColor: '#555', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }
})
