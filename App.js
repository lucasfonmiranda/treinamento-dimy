

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import NewComponent from './src/components/NewComponent';
import styles from './src/components/Styles';

class App extends Component{
  render(){
    return(
      <View  style={styles.container}> 
          <NewComponent />
          <Text style={styles.newTest}>Novo teste</Text>
      </View>
    )
  }
}

export default App;