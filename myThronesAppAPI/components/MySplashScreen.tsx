import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

interface MySplashScreenProps {
  onFinish: () => void;
}

const MySplashScreen: React.FC<MySplashScreenProps> = ({ onFinish }) => {
  useEffect(() => {
    async function prepare() {
      // Simulate a task, e.g., loading resources
      await new Promise(resolve => setTimeout(resolve, 3000));
      onFinish();
    }

    prepare();
  }, [onFinish]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to MyThronesApp</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // Adjust to your background color
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default MySplashScreen;
