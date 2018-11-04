import React, { Component } from 'react'
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native'
import { ScoreButton, ScoreUser, Timer } from './src/components'

const { width } = Dimensions.get('window')

export default class App extends Component {
  state = {
    one: { points: 0, adv: 0, pen: 0 },
    two: { points: 0, adv: 0, pen: 0 }
  }

  resetMatch = () => {
    this.setState({
      one: { points: 0, adv: 0, pen: 0 },
      two: { points: 0, adv: 0, pen: 0 }
    })
  }

  incrementPlayerPoint = (player, points) => {
    this.setState({
      [player]: {...this.state[player], points: this.state[player].points + points }
    })
  }

  decrementPlayerPoint = (player, points) => {
    this.setState({
      [player]: {...this.state[player], points: this.state[player].points - points }
    })
  }

  incrementPlayerAdv = (player) => {
    this.setState({
      [player]: {...this.state[player], adv: this.state[player].adv + 1 }
    })
  }

  decrementPlayerAdv = (player) => {
    this.setState({
      [player]: {...this.state[player], adv: this.state[player].adv - 1 }
    })
  }

  incrementPlayerPen = (player) => {
    this.setState({
      [player]: {...this.state[player], pen: this.state[player].pen + 1 }
    })
  }

  decrementPlayerPen = (player) => {
    this.setState({
      [player]: {...this.state[player], pen: this.state[player].pen - 1 }
    })
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>

        {/* Buttons */}
        <View style={{ flex: 0.5, flexDirection: 'column' }}>
          <ScoreButton amount={4} onDecrement={() => this.decrementPlayerPoint('one', 4)} onIncrement={() => this.incrementPlayerPoint('one', 4)} backgroundColor={'#000'} textColor={'#fff'} />
          <ScoreButton amount={3} onDecrement={() => this.decrementPlayerPoint('one', 3)} onIncrement={() => this.incrementPlayerPoint('one', 3)} backgroundColor={'#999'} textColor={'#fff'} />
          <ScoreButton amount={2} onDecrement={() => this.decrementPlayerPoint('one', 2)} onIncrement={() => this.incrementPlayerPoint('one', 2)} backgroundColor={'#888'} textColor={'#fff'} />
        </View>

        <View style={{ flex: 2 }}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <ScoreUser
              {...this.state.one}
              onAdvIncrement={() => this.incrementPlayerAdv('one')}
              onAdvDecrement={() => this.decrementPlayerAdv('one')}
              onPenIncrement={() => this.incrementPlayerPen('one')}
              onPenDecrement={() => this.decrementPlayerAdv('one')}
              backgroundColor={'red'}
              textColor={'#fff'}
            />
            <ScoreUser
              {...this.state.two}
              onAdvIncrement={() => this.incrementPlayerAdv('two')}
              onAdvDecrement={() => this.decrementPlayerAdv('two')}
              onPenIncrement={() => this.incrementPlayerPen('two')}
              onPenDecrement={() => this.decrementPlayerAdv('two')}
              backgroundColor={'blue'}
              textColor={'#fff'}
            />
          </View>
          <Timer onReset={this.resetMatch} />
        </View>

        {/* Buttons */}
        <View style={{ flex: 0.5, flexDirection: 'column' }}>
          <ScoreButton amount={4} onDecrement={() => this.decrementPlayerPoint('two', 4)} onIncrement={() => this.incrementPlayerPoint('two', 4)} backgroundColor={'#000'} textColor={'#fff'} />
          <ScoreButton amount={3} onDecrement={() => this.decrementPlayerPoint('two', 3)} onIncrement={() => this.incrementPlayerPoint('two', 3)} backgroundColor={'#999'} textColor={'#fff'} />
          <ScoreButton amount={2} onDecrement={() => this.decrementPlayerPoint('two', 2)} onIncrement={() => this.incrementPlayerPoint('two', 2)} backgroundColor={'#888'} textColor={'#fff'} />
        </View>

        <Image
          style={{ width: 100, position: 'absolute', resizeMode: 'contain', top: 10, left: (width / 2) - 50  }}
          source={require('./src/assets/images/logo.png')}
        />

      </View>
    )
  }
}
