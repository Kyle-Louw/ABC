import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useMenu } from '../context/MenuContext';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/styles';

export default function AddItemScreen() {
  const { addItem } = useMenu();
  const navigation = useNavigation<any>();
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [course, setCourse] = useState<'Starters' | 'Mains' | 'Desserts'>('Starters');
  const [price, setPrice] = useState('');

  const submit = () => {
    if (!name || !price) {
      Alert.alert('Error', 'Please enter a dish name and price.');
      return;
    }
    addItem({ name, description: desc, category: course, price: parseFloat(price) });
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Menu Item</Text>
      <TextInput style={styles.input} placeholder="Dish Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Description" value={desc} onChangeText={setDesc} />
      <Picker selectedValue={course} onValueChange={v => setCourse(v)}>
        <Picker.Item label="Starters" value="Starters" />
        <Picker.Item label="Mains" value="Mains" />
        <Picker.Item label="Desserts" value="Desserts" />
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Price"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />
      <TouchableOpacity style={styles.button} onPress={submit}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

