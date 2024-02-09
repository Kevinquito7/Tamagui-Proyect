import { useState, useEffect } from 'react';
import { Pencil, Trash } from "@tamagui/lucide-icons";
import { Button, Card, H2, Paragraph, XStack, View } from 'tamagui'
import { router } from 'expo-router';
import { fetchScenes } from '../components/apis';
import type { CardProps } from 'tamagui';

export function Scene1({ filmId, ...props }: { filmId: number } & CardProps) {
  const [scenes, setScenes] = useState<Scene[]>([]);
  const [fetchingScenes, setFetchingScenes] = useState(true);

  useEffect(() => {
    if (fetchingScenes) {
      const getScenes = async () => {
        try {
          const scenesData = await fetchScenes(filmId); 
          setScenes(scenesData);
        } catch (error) {
          console.error('Error fetching scenes:', error);
        } finally {
          setFetchingScenes(false);
        }
      };

      getScenes();
    }
  }, [fetchingScenes, filmId]);

  return (
    <>
      {scenes.map((scene, index) => (
        <Card key={index} elevate size="$4" bordered style={{ marginBottom: index === scenes.length - 1 ? 0 : 16 }} {...props}>
          <Card.Header onPress={() => router.push("/tabs/tab3")} padded>
            <H2>SCENE{index + 1}</H2>
            <View>
              <Paragraph theme="alt2">Description: {scene.description}</Paragraph>
              <Paragraph theme="alt2">Budget: {scene.budget}</Paragraph>
              <Paragraph theme="alt2">Minutes: {scene.minutes}</Paragraph>
            </View>
          </Card.Header>
          <Card.Footer padded>
            <XStack flex={1} />
            <Button borderRadius="$10" onPress={() => router.push("/postScene")} icon={Pencil}></Button>
            <Button borderRadius="$10" icon={Trash}></Button>
          </Card.Footer>
        </Card>
      ))}
    </>
  );
 }
