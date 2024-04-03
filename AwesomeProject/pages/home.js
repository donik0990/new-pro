import { useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableWithoutFeedback,
  Button,
  Modal,
  Pressable,
  FlatList,
} from "react-native";
import { ModalAdd } from "../componets/modalAdd";

export function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibles, setModalVisibles] = useState(false);
  const [users, setUsers] = useState([
    { id: "", first_name: "", last_name: "", email: "", avatar: "" },
  ]);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((users) => setUsers(users.data));
  }, []);

  const handlerAddTask = (first_name, last_name, email, avatar) => {
    setUsers([
      ...users,
      {
        id: users.length + 1,
        first_name,
        last_name,
        email,
        avatar,
      },
    ]);
    setModalVisible(false);
  };

  const handeldelete = ({ id }) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const [search, setSearch] = useState("");

  const filterUsers = users.filter((user) =>
    user.first_name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
          marginTop: 15,
          marginBottom: 20,
        }}
      >
        <TextInput style={styles.input} onChangeText={setSearch} />

        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
          <Text style={styles.button}>User Add</Text>
        </TouchableWithoutFeedback>
      </View>

      <ModalAdd
        addTask={handlerAddTask}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />

      <FlatList
        style={styles.scroll}
        data={filterUsers}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => {
          console.log(item.id);
          return (
            <View
              key={item.id}
              style={[
                {
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 20,
                  backgroundColor: "white",
                  width: "100%",
                  marginBottom: 20,
                  borderRadius: 12,
                },
              ]}
            >
              <Image
                style={[
                  {
                    justifyContent: "center",
                    borderRadius: 12,
                    width: 350,
                    height: 350,
                  },
                ]}
                source={item.avatar}
              />
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisibles}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  setModalVisibles(!modalVisibles);
                }}
              >
                <View style={styles.mod}>
                  <Image
                    source={item.avatar}
                    style={[
                      {
                        justifyContent: "center",
                        borderRadius: 12,
                        width: 350,
                        height: 350,
                      },
                    ]}
                  />
                  <Text>{item.first_name}</Text>
                  <Text>{item.email}</Text>
                  <Text>{item.last_name}</Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisibles(!modalVisibles)}
                  >
                    <Text style={styles.textStyle}>Close</Text>
                  </Pressable>
                </View>
              </Modal>

              <Text style={styles.text}> Name: {item.first_name}</Text>

              <View style={styles.buttons}>
                <Button
                  title="in detail"
                  onPress={() => setModalVisibles(true)}
                />
                <Button
                  title="delete"
                  onPress={() => handeldelete({ id: item.id })}
                />
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4682B4",
    alignItems: "center",
    maxHeight: "100%",
  },
  scroll: {
    flexGrow: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: "white",
    width: 300,
    padding: 8,
    borderRadius: 18,
    paddingHorizontal: 12,
    backgroundColor: "white",
    justifyContent: "flex-end",
  },
  button: {
    width: 180,
    borderWidth: 1,
    borderRadius: 18,
    borderColor: "#DCDCDC",
    backgroundColor: "#008080",
    height: 40,
    textAlign: "center",
    padding: 8,

    color: "white",
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 35,
  },
  mod: {
    flex: 1,
    backgroundColor: "#4682B4",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    paddingTop: 300,
    alignItems: "center",
  },
  buttons: {
    flexDirection: "column",
    flexWrap: "wrap",
    gap: 15,
    color: "white",
  },
});
