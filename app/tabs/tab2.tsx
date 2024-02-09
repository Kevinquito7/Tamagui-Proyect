import { H1, H5,ScrollView } from "tamagui";
import { MyStack } from "../../components/MyStack";
import {Scene1} from "../../components/Scene";

export default function Tab2() {
  return (
    <>
    <H1  style={styles.dashText}>FILM</H1>
    <H5  style={styles.dashText}>Scene</H5>
  
    <ScrollView>
    <MyStack>
      <Scene1/>
    </MyStack>
    </ScrollView>
    </>
  );
};

const styles = {
  dashText:{
    marginBottom:8,
    paddingLeft:18
  },

  };

