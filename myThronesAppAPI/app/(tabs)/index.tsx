import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MySplashScreen from "@/components/MySplashScreen";
import { useState, useEffect } from "react";
import SignInScreen from "@/components/SignInScreen";
import SignUpScreen from "@/components/SignUpScreen";

const Stack = createNativeStackNavigator();

const Index: React.FC = () => {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    async function prepareApp() {
      // Simulate a task, e.g., loading resources
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setIsAppReady(true);
    }

    prepareApp();
  }, []);

  if (!isAppReady) {
    return <MySplashScreen onFinish={() => setIsAppReady(true)} />;
  }
  return (
    // <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Profile" component={SignUpScreen} />
      </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default Index;
