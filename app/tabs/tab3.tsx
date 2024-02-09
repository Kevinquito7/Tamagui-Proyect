import { H1, H5,ScrollView } from "tamagui";
import { MyStack } from "../../components/MyStack";
import {Character1} from "../../components/Character";

export default function Tab3() {
  return (
    <>
    <H1  style={styles.dashText}>SCENE</H1>
    <H5  style={styles.dashText}>Character</H5>
  
    <ScrollView>
    <MyStack>
      <Character1/>
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

