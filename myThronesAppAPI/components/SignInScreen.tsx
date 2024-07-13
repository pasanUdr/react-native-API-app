import { Navigator } from "expo-router";
import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import SignUpScreen from "@/components/SignUpScreen";


interface SignInFormProps {
  onSignIn: (email: string, password: string) => void;
}

const SignInScreen: React.FC<SignInFormProps> = ({ onSignIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleSignIn = () => {
    // Basic validation
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password");
      return;
    }

    // Call parent callback function
    onSignIn(email, password);
  };
  const onSignUpNavigate = () => {
    console.log("clicked");
    // navigation.navigate('SignUpScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>MyThrones App</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Sign In" onPress={handleSignIn} />

      <TouchableOpacity >
        <Text style={styles.signUpText}>
          Don't have an account? <Text style={styles.signUpLink} onPress={onSignUpNavigate}>Sign Up here</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    // backgroundColor: "#000000",
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    margin: 100,
  },
  input: {
    marginBottom: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
  },
  signUpText: {
    alignSelf: "center",
    marginTop:150,
  },
  signUpLink: {
    textDecorationLine: 'underline',
  },
});

export default SignInScreen;
