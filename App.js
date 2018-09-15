import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Card } from 'react-native-elements';
import Theme from './Components/Theme';

export default class App extends React.Component {
  render() {
    return (
      <View style={ styles.root }>
        <Image source={ require("./assets/Logo.png") } />
        <Card style={ styles.ConnectionCard }>

        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Theme.palette.primary.color,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ConnectionCard: {
  }
});
