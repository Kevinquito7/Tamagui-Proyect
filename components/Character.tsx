import { useState, useEffect } from 'react';
import { Pencil, Trash } from "@tamagui/lucide-icons";
import { Button, Card, H2, Paragraph, XStack } from 'tamagui'
import { router } from 'expo-router';
import { fetchCharacters } from '../components/apis'; 
import type { CardProps } from 'tamagui';

export function Character1(props: CardProps) {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [fetchingCharacters, setFetchingCharacters] = useState(true);

  useEffect(() => {
    if (fetchingCharacters) {
      const getCharacters = async () => {
        try {
          const charactersData = await fetchCharacters(); 
          setCharacters(charactersData);
        } catch (error) {
          console.error('Error fetching characters:', error);
        } finally {
          setFetchingCharacters(false);
        }
      };

      getCharacters();
    }
  }, [fetchingCharacters]);

  return (
    <>
      {characters.map((character, index) => (
        <Card key={index} elevate size="$4" bordered style={{ marginBottom: index === characters.length - 1 ? 0 : 16 }} {...props}>
          <Card.Header onPress={() => router.push("/tabs/tab1")} padded>
            <H2>CHARACTER{index + 1}</H2>
            <Paragraph theme="alt2">Description: {character.description}</Paragraph>
            <Paragraph theme="alt2">Cost: {character.cost}</Paragraph>
            <Paragraph theme="alt2">Stock: {character.stock}</Paragraph>
          </Card.Header>
          <Card.Footer padded>
            <XStack flex={1} />
            <Button borderRadius="$10" icon={Pencil} onPress={() => router.push("/postCharacter")}></Button>
            <Button borderRadius="$10" icon={Trash}></Button>
          </Card.Footer>
        </Card>
      ))}
    </>
  );
}
