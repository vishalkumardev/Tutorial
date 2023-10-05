import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Splash = () => {
  return (
    <View style={{flex: 1}}>
      <Image
        source={require('../assets/splash.gif')}
        style={{width: '100%', height: '100%'}}
        resizeMode="cover"
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
