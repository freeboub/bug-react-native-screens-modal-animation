/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

import {Screen, ScreenStack} from 'react-native-screens';

function App(): React.JSX.Element {
  const [childDisplayed, setChildDisplayed] = useState(false);

  // autoclose the view
  useEffect(() => {
    if (childDisplayed) {
      setTimeout(() => {
        setChildDisplayed(false);
      }, 5000);
    }
  }, [childDisplayed]);

  return (
    <SafeAreaView style={{ backgroundColor: 'white', height: '100%' }}>
    <ScreenStack style={StyleSheet.absoluteFill}>
      <Screen
        key="parent"
        activityState={2}
        style={StyleSheet.absoluteFill}>
        <Pressable
            style={styles.pressable}
            onPress={() => {
              setChildDisplayed(true);
            }}/>
      </Screen>
      {childDisplayed ? (
        <Screen
          key="child"
          activityState={2}
          transitionDuration={10000}
          isNativeStack
          stackAnimation={'slide_from_bottom'}
          style={StyleSheet.absoluteFill}>
            <View style={styles.square}/>
        </Screen>) :
        <></> }
    </ScreenStack>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  pressable: { width: 100, height: 100, backgroundColor: 'red' },
  square: {
    height: '100%',
    overflow: 'hidden', // removing hidden fix the issue
    backgroundColor: 'green',
  },
});

export default App;
