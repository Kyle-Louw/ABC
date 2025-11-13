import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useMenu } from '../context/MenuContext';
import { MenuItem } from '../types/MenuItem';
import styles from '../styles/styles';

export default function FilterScreen() {
  const { menu } = useMenu();
  const [selectedCourse, setSelectedCourse] = useState<'Starters' | 'Mains' | 'Desserts'>('Starters');

  const filtered = menu.filter(item => item.category === selectedCourse);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter by Course</Text>

      <View style={styles.row}>
        {['Starters', 'Mains', 'Desserts'].map(course => (
          <TouchableOpacity
            key={course}
            onPress={() => setSelectedCourse(course as any)}
            style={[
              styles.filterButton,
              selectedCourse === course && styles.filterButtonActive,
            ]}
          >
            <Text style={styles.filterText}>{course}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filtered}
        keyExtractor={i => i.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>R{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}
