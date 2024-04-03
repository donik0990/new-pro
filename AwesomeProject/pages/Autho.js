import { useRef, useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  Image,
} from "react-native";

const userData = [
  {
    user: "Jonson123",
    password: "12345",
  },
  {
    user: "Moly0990",
    password: "54321",
  },
  {
    user: "Lusy123",
    password: "12345",
  },
  {
    user: "Taylor633",
    password: "12345",
  },
  {
    user: "Marck0668",
    password: "12345",
  },
];

export function Autho({ navigation }) {
  const login = useRef("");
  const password = useRef("");
  const [user, setUser] = useState();
  const [error, setError] = useState("");

  function handelLogin() {
    const handelHome = () => {
      navigation.navigate("home");
    };
    for (const user of userData) {
      if (user.user === login.current && user.password === password.current) {
        setUser({ user: login.current, password: password.current });
        handelHome();
        return;
      }
      setError("Не правылный логин или пароль");
    }
    return;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>AUTHORIZATION</Text>
      <View style={styles.autho}>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={{
              uri: "https://cdn2.iconfinder.com/data/icons/picons-basic-1/57/basic1-111_user_security-1024.png",
            }}
          />
        </View>
        <TextInput
          placeholder="Login User"
          style={styles.input}
          onChangeText={(text) => (login.current = text)}
        />
        <Text style={styles.error}>{error}</Text>
        <TextInput
          secureTextEntry
          placeholder="password"
          style={styles.input}
          onChangeText={(text) => (password.current = text)}
        />
        <Text style={styles.error}>{error}</Text>
        <TouchableWithoutFeedback onPress={() => handelLogin()}>
          <View style={styles.buttonView}>
            <View style={styles.button}>Log In</View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4682B4",
    alignItems: "center",
    paddingTop: 200,
    gap: 20,
  },
  autho: {
    width: 300,
    borderRadius: 12,
    backgroundColor: "#DCDCDC",
    padding: 20,
    gap: 10,
  },
  title: {
    color: "white",
    fontFamily: " Georgia, serif",
    fontSize: 25,
    lineHeight: 12,
  },
  imgView: {
    alignItems: "center",
  },
  img: {
    width: 80,
    height: 80,
  },
  input: {
    borderWidth: 1,
    borderColor: "white",
    padding: 8,
    borderRadius: 18,
    paddingHorizontal: 12,
    backgroundColor: "white",
  },
  buttonView: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 180,
    borderWidth: 1,
    borderRadius: 18,
    borderColor: "#DCDCDC",
    backgroundColor: "#008080",
    height: 30,
    textAlign: "center",
    padding: 5,
    color: "white",
    fontSize: 18,
  },
  error: {
    color: "red",
    fontSize: 15,
    textAlign: "center",
  },
});
