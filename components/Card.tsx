import React, { useEffect, useState } from 'react';
import { fetchFilms, deleteFilm } from '../components/apis';
import { Pencil, Trash } from "@tamagui/lucide-icons";
import { Button, Card, H2, Paragraph, XStack } from 'tamagui';
import { router } from 'expo-router';

export function DemoCard(props) {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetchFilms()
      .then(data => setFilms(data))
      .catch(error => console.error(error));
  }, []);

  const handleDeleteFilm = async (id) => {
    try {
      await deleteFilm(id);
      const updatedFilms = films.filter(film => film.id !== id);
      setFilms(updatedFilms);
    } catch (error) {
      console.error('Error deleting film:', error);
    }
  };

  return (
    <>
      {films.map((film, index) => (
        <Card key={film.id} elevate size="$4" bordered style={{ marginBottom: index === films.length - 1 ? 0 : 16 }} {...props}>
          <Card.Header onPress={() => router.push("/tabs/tab2")} padded>
            <H2>{film.title}</H2>
            <Paragraph theme="alt2">Director: {film.director}</Paragraph>
            <Paragraph theme="alt2">Duración: {film.duration} minutos</Paragraph>
          </Card.Header>
          <Card.Footer padded>
            <XStack flex={1} />
            <Button borderRadius="$10" icon={Pencil} onPress={() => router.push("/postFilm")}></Button>
            <Button borderRadius="$10" icon={Trash} onPress={() => handleDeleteFilm(film.id)}></Button>
          </Card.Footer>
        </Card>
      ))}
    </>
  );
}

export function AddCardButton() {
  return (
    <Button borderRadius="$10" icon={Pencil} onPress={() => router.push("/postFilm")}></Button>
  );
}
