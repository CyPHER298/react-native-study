import { Text, StyleSheet } from "react-native";

export const Timer = ({initialValue}) => {
  const date = new Date(initialValue * 1000);
  const options = { minute: "2-digit", second: "2-digit" };
  return (
    <Text style={styles.timer}>
      {date.toLocaleTimeString("pt-BR", options)}
    </Text>
  );
};

const styles = StyleSheet.create({
  timer: {
    fontSize: 54,
    color: "#fefefe",
    fontWeight: "bold",
    textAlign: "center",
  },
});
