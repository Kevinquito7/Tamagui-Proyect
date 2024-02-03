import { H1, H5, Tabs, Text,ScrollView } from "tamagui";
import { MyStack } from "../../components/MyStack";
import {DemoCard, DemoCard1, DemoCard2 } from "../../components/Card";

export default function Tab1() {
  return (
    <>
    <H1  style={styles.dashText}>DASHBOARD</H1>
    <H5  style={styles.dashText}>Films</H5>
  
    <ScrollView>
    <MyStack>
      <DemoCard/>
      <DemoCard1/>
      <DemoCard2/>
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
