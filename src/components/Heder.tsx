import React, {useRef, useEffect, useState} from 'react';
import {
  Animated,
  View,
  StyleSheet,
  SafeAreaView,
  Easing,
  Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('window');

const App = () => {
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const rotateBottomAnim = useRef(new Animated.Value(0)).current;

  const [visibleCircle, setVisibleCircle] = useState('none');
  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
    Animated.loop(
      Animated.timing(rotateBottomAnim, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, [rotateAnim, rotateBottomAnim]);
  useEffect(() => {
    setTimeout(() => {
      setVisibleCircle('flex');
    }, 1000);
  }, []);

  // useEffect(() => {
  // }, [rotateBottomAnim]);

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['-40deg', '-210deg'],
  });

  const spinBottom = rotateAnim.interpolate({
    inputRange: [0.5, 1.5],
    outputRange: ['0deg', '-210deg'],
  });

  return (
    <SafeAreaView style={styles.container}>
      <Animated.Image
        source={require('../assets/png/Ellipse.png')}
        style={[
          styles.transformTopView,
          {display: visibleCircle},
          {
            top: 200,
            transform: [{rotate: spin}],
          },
        ]}
      />
      <Animated.Image
        source={require('../assets/png/Ellipse.png')}
        style={[
          styles.transformOriginView,
          {display: visibleCircle},
          {
            bottom: -100,
            transform: [{rotate: spinBottom}],
          },
        ]}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  transformOriginWrapper: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.5)',
  },
  transformTopView: {
    // backgroundColor: 'pink',
    width: 384,
    height: 384,
    transformOrigin: 'top',
  },
  transformOriginView: {
    // backgroundColor: 'pink',
    width: width,
    height: width,
    transformOrigin: 'top',
  },
});

export default App;
