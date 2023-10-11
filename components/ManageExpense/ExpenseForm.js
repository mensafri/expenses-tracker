import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";

export default function ExpenseForm() {
  function amounChangeHandler() {}

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Pengeluaran Anda</Text>
      <View style={styles.inputRow}>
        <Input
          label="Jumlah"
          texInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: amounChangeHandler,
          }}
          style={styles.rowInput}
        />
        <Input
          label="Tanggal"
          texInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: () => {},
          }}
          style={styles.rowInput}
        />
      </View>
      <Input
        label="Deskripsi"
        texInputConfig={{
          multiline: true,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 18,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginVertical: 24,
    textAlign: "center",
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
});
