import { H1, H5,ScrollView } from "tamagui";
import { MyStack } from "../../components/MyStack";
import {AddCardButton, DemoCard} from "../../components/Card";
export default function Tab1() {
  return (
    <>
    <H1  style={styles.dashText}>DASHBOARD</H1>
    <H5  style={styles.dashText}>Films</H5>
  
    <ScrollView>
    <MyStack>
      <DemoCard/>
      <AddCardButton/>
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