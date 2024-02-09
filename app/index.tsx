import {  Youtube } from "@tamagui/lucide-icons";
import { Link, useRouter } from "expo-router";
import {
  Button,
  ListItem,
  Paragraph,
  Separator,
  YGroup,
  YStack,
  Image,
} from "tamagui";

import { MySafeAreaView } from "../components/MySafeAreaView";
import { MyStack } from "../components/MyStack";
import { StyleSheet, ImageBackground } from "react-native";

export default function Home() {
  const router = useRouter();

  return (

    <MySafeAreaView>
      <ImageBackground source={require("../assets/Pantalla.jpg")}
      style={styles.background}>
      <MyStack>
        <YStack
          space="$4"
          maxWidth={600}
        >
          <Image
          source={{
            uri: require("../assets/toyStory.png")  }}
            style={styles.logo}
          />
          <Paragraph textAlign="center">
          Las aventuras de juguetes vivientes, liderados por Woody el vaquero y Buzz Lightyear, exploran varias aventuras juntos.
          </Paragraph>
        </YStack>
       
        <YStack space="$2.5">
  <Button
    onPress={() => router.push("/tabs")}
    style={styles.buttonStyle}
    accessibilityLabel="Go to tabs page"
  >
    Iniciar
  </Button>
</YStack>


        <YStack space="$5">
          <YGroup
           
            separator={<Separator />}
            
          >
            
            <YGroup.Item>
              <Link style={styles.git}
                asChild
                href="https://www.youtube.com/watch?v=yx_Ct__kMtc"
                target="_blank"
              >
                <ListItem 
                  hoverTheme
                  pressTheme
                  title="Resumen"
                  icon={Youtube}
                />
              </Link>
            </YGroup.Item>
           
          </YGroup>
        </YStack>
      </MyStack>
      </ImageBackground>
    </MySafeAreaView>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center', 
  },

  logo:{
    width: 150,
    height:120,
    resizeMode: 'center',
    alignSelf: 'center', 
  },
  buttonStyle: {
    alignSelf: 'center',
    backgroundColor: 'transparent', 
    borderWidth: 1.5, 
    borderColor: 'orange',
    borderRadius: 20, 
    padding: 10, 
    marginTop: -195,
  },
    git:{
      backgroundColor: 'transparent',
      borderWidth: 3, 
      borderColor: '#E56E0A', 
      borderRadius: 20, 
      padding: 5, 
      marginTop: 5, 
      
    }
});




