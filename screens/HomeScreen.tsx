import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useMenu } from '../context/MenuContext';
import { MenuItem } from '../types/MenuItem';
import styles from '../styles/styles';

function getAveragePrice(category: string, data: MenuItem[]) {
  const items = data.filter(i => i.category === category);
  if (items.length === 0) return '0.00';
  const total = items.reduce((sum, i) => sum + i.price, 0);
  return (total / items.length).toFixed(2);
}

export default function HomeScreen() {
  const { menu } = useMenu();
  const navigation = useNavigation<any>();

  const starterAvg = getAveragePrice('Starters', menu);
  const mainsAvg = getAveragePrice('Mains', menu);
  const dessertsAvg = getAveragePrice('Desserts', menu);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Full Menu</Text>
      <Text style={styles.subtitle}>Total Items: {menu.length}</Text>

      <View style={styles.avgBox}>
        <Text>Average Starter: R{starterAvg}</Text>
        <Text>Average Main: R{mainsAvg}</Text>
        <Text>Average Dessert: R{dessertsAvg}</Text>
      </View>

      <FlatList
        data={menu}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text>{item.category}</Text>
            <Text>{item.description}</Text>
            <Text>R{item.price}</Text>
          </View>
        )}
      />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddItem')}>
        <Text style={styles.buttonText}>Add Menu Item</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: '#888' }]} onPress={() => navigation.navigate('Filter')}>
        <Text style={styles.buttonText}>Filter by Course</Text>
      </TouchableOpacity>
    </View>
  );
}

