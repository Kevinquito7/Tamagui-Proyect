import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, Alert } from 'react-native';
import { Button, Input, XStack, YStack, H1 } from 'tamagui';
import { router } from 'expo-router';
import { updateFilm } from '../components/apis'; 
import { SkipBack } from "@tamagui/lucide-icons";

export function InputsDemo({ filmData }) {
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [director, setDirector] = useState('');

  useEffect(() => {
    if (filmData) {
      setTitle(filmData.title || '');
      setTime(filmData.duration ? filmData.duration.toString() : '');
      setDirector(filmData.director || '');
    }
  }, [filmData]);

  const handleUpdateFilm = async () => {
    if (!filmData) return;

    if (!title.trim() || !time.trim() || !director.trim()) {
      Alert.alert('Error', 'Los campos no pueden estar vacíos');
      return;
    }

    const updatedFilm = {
      id: filmData.id,
      title,
      duration: parseInt(time),
      director,
    };

    try {
      await updateFilm(updatedFilm.id, updatedFilm);
      console.log('Película actualizada:', updatedFilm);
      router.push('/tabs/tab1');
    } catch (error) {
      console.error('Error al actualizar la película:', error);
      Alert.alert('Error', 'Hubo un problema al actualizar la película. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  return (
    <YStack>
      <H1 style={styles.dashText}>FILMS</H1>
      <Image source={require('../assets/pelicula.jpg')} style={styles.imageStyle} />
      <XStack justifyContent="center" alignItems="center">
        <H1 style={styles.text}>Title</H1>
      </XStack>
      <XStack justifyContent="center" alignItems="center">
        <Input style={{ width: '90%' }} value={title} onChangeText={setTitle} />
      </XStack>
      <XStack justifyContent="space-evenly">
        <H1 style={styles.text}>Time</H1>
        <H1 style={styles.text}>Director</H1>
      </XStack>
      <XStack justifyContent="space-evenly">
        <Input style={{ width: '40%' }} value={time} onChangeText={setTime} />
        <Input style={{ width: '40%' }} value={director} onChangeText={setDirector} />
      </XStack>
      <Button onPress={handleUpdateFilm} style={styles.buttonStyle}>Añadir</Button>
      <Button onPress={() => router.push('/tabs/tab1')} style={styles.buttonStyle} icon={SkipBack} />
    </YStack>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'orange',
    fontSize: 29,
  },
  buttonStyle: {
    alignSelf: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: 'orange',
    borderRadius: 20,
    padding: 10,
    marginTop: 25,
  },
  dashText: {
    paddingTop: 70,
    fontWeight: 'bold',
    color: '#DB581D',
  },
  imageStyle: {
    width: 450,
    height: 350,
    alignSelf: 'center',
    resizeMode: 'center',
  },
});

export default InputsDemo;
