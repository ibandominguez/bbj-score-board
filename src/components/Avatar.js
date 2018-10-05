import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Dimensions, StyleSheet, View, Image, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const { width } = Dimensions.get('window')

export default class extends Component {
  static propTypes = {
    image: Image.propTypes.source,
    title: PropTypes.string.isRequired,
    onPointUp: PropTypes.func.isRequired,
    onPointDown: PropTypes.func.isRequired,
    onAdvantageUp: PropTypes.func.isRequired,
    onAdvantageDown: PropTypes.func.isRequired,
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={[styles.header, { backgroundColor: this.props.backgroundColor || '#bbb' }]}>
          <Image style={styles.image} source={this.props.image} />
          <Text style={styles.title}>{this.props.title}</Text>
        </View>
        <View style={[styles.scoreBox, { borderBottomWidth: 1, borderBottomColor: '#ddd' }]}>
          <Icon onPress={this.props.onPointDown} style={{ flex: 1, textAlign: 'center' }} size={30} name={'md-arrow-round-down'} />
          <Text style={{ flex: 2, textAlign: 'center' }}>Puntos ({this.props.points})</Text>
          <Icon onPress={this.props.onPointUp} style={{ flex: 1, textAlign: 'center' }} size={30} name={'md-arrow-round-up'} />
        </View>
        <View style={[styles.scoreBox]}>
          <Icon onPress={this.props.onAdvantageDown} style={{ flex: 1, textAlign: 'center' }} size={30} name={'md-arrow-round-down'} />
          <Text style={{ flex: 2, textAlign: 'center' }}>Ventajas ({this.props.advantages})</Text>
          <Icon onPress={this.props.onAdvantageUp} style={{ flex: 1, textAlign: 'center' }} size={30} name={'md-arrow-round-up'} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { borderTopStartRadius: 5, borderTopRightRadius: 5, padding: 10, justifyContent: 'center', alignItems: 'center' },
  image: { height: width * 0.33, width: width * 0.33, borderRadius: (width * 0.33) / 2 },
  title: {},
  scoreBox: { padding: 10, backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }
})
