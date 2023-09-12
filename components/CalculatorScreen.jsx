import React, { useRef, useState } from 'react';
import { FlatList, StyleSheet, View, Text, Button, TextInput } from 'react-native';

export default function CalculatorScreen({ navigation }) {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');
  const [data, setData] = useState([]);

  const initialFocus = useRef(null);

  const plus = () => {
    const num1 = parseInt(number1);
    const num2 = parseInt(number2);
    const result = num1 + num2;
    setResult(result);
    setNumber1('');
    setNumber2('');
    initialFocus.current.focus();
    setData([...data, { key: `${num1} + ${num2} = ${result}` }]);
  };

  const minus = () => {
    const num1 = parseInt(number1);
    const num2 = parseInt(number2);
    const result = num1 - num2;
    setResult(result);
    setNumber1('');
    setNumber2('');
    initialFocus.current.focus();
    setData([...data, { key: `${num1} - ${num2} = ${result}` }]);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>Result: {result}</Text>
      <TextInput
        style={styles.input}
        ref={initialFocus}
        onChangeText={(number1) => setNumber1(number1)}
        value={number1}
        keyboardType="number-pad"
      />
      <TextInput
        style={styles.input}
        onChangeText={(number2) => setNumber2(number2)}
        value={number2}
        keyboardType="number-pad"
      />
      <View style={styles.button}>
        <View style={styles.buttonMore}>
          <Button onPress={plus} title="+" />
        </View>
        <View style={styles.buttonMore}>
          <Button onPress={minus} title="-" />
        </View>
        <View style={styles.history}>
          <Button
            onPress={() => navigation.navigate('History', { data })}
            title="History" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'afff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '50%',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5,
    margin: 5,
  },
  button: {
    width: '35%',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  buttonMore: {
    width: '30%',
    padding: 5,
    margin: 5,
  },
  history: {
    padding: 5,
    padding: 5,
    margin: 5,
  }
});