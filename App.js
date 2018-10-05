import React, { Component } from 'react'
import { Dimensions, StyleSheet, Text, View, ScrollView } from 'react-native'
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
      <View style={styles.container}>
        <View style={styles.gridView}>
          <Avatar
            points={this.state.pointsOne}
            advantages={this.state.advantagesOne}
            style={{ marginRight: separation }}
            title={'Oponente 1'}
            image={require('./src/assets/images/avatar.png')}
            onPointUp={() => this.setState({ pointsOne: this.state.pointsOne + 1 })}
            onPointDown={() => this.setState({ pointsOne: this.state.pointsOne - 1 })}
            onAdvantageUp={() => this.setState({ advantagesOne: this.state.advantagesOne + 1 })}
            onAdvantageDown={() => this.setState({ advantagesOne: this.state.advantagesOne - 1 })}
          />

          <Avatar
            points={this.state.pointsTwo}
            advantages={this.state.advantagesTwo}
            title={'Oponente 2'}
            image={require('./src/assets/images/avatar.png')}
            onPointUp={() => this.setState({ pointsTwo: this.state.pointsTwo + 1 })}
            onPointDown={() => this.setState({ pointsTwo: this.state.pointsTwo - 1 })}
            onAdvantageUp={() => this.setState({ advantagesTwo: this.state.advantagesTwo + 1 })}
            onAdvantageDown={() => this.setState({ advantagesTwo: this.state.advantagesTwo - 1 })}
          />
        </View>

        <Timer onReset={this.resetMatch.bind(this)} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: padding },
  gridView: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: separation }
})
