import {
  Modal,
  TextInput,
  View,
  SafeAreaView,
  Button,
  StyleSheet,
  Text,
} from "react-native";
import { useRef } from "react";

export const ModalAdd = ({
  addTask,
  setModalVisible,
  modalVisible = false,
}) => {
  const first_name = useRef("");
  const last_name = useRef("");
  const email = useRef("");
  const avatar = useRef(
    "https://avatars.mds.yandex.net/i?id=c1134b03cb73037b551f6ad70d9568ed8da374bd-10119783-images-thumbs&n=13"
  );

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.title}> Add Users</Text>
          <View style={styles.view}>
            <TextInput
              style={styles.input}
              placeholder="first_name"
              onChangeText={(text) => (first_name.current = text)}
            />
            <TextInput
              style={styles.input}
              placeholder="last_name"
              onChangeText={(text) => (last_name.current = text)}
            />
            <TextInput
              style={styles.input}
              placeholder="email"
              onChangeText={(text) => (email.current = text)}
            />
            <TextInput
              style={styles.input}
              placeholder="avatar"
              onChangeText={(text) => (avatar.current = text)}
            />

            <Button
              title=" Close Add"
              onPress={() => setModalVisible(!modalVisible)}
            />
            <Button
              onPress={() => {
                addTask(
                  first_name.current,
                  last_name.current,
                  email.current,
                  avatar.current
                );
              }}
              title="add Task"
            />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4682B4",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  title: {
    color: "white",
    fontFamily: " Georgia, serif",
    fontSize: 25,
    lineHeight: 12,
  },
  view: {
    width: 300,
    borderRadius: 12,
    backgroundColor: "#DCDCDC",
    padding: 20,
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "white",
    padding: 8,
    borderRadius: 18,
    paddingHorizontal: 12,
    backgroundColor: "white",
  },
});
