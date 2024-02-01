import { H1, H5, Tabs, Text } from "tamagui";
import { MyStack } from "../../components/MyStack";

export default function Tab1() {
  return (
    <MyStack>
      <Tabs
        defaultValue="tab1"
        orientation="horizontal"
        flexDirection="column"
        width="100%"
      >
        <Tabs.List>
          <Tabs.Tab value="tab1">
            <Text>SubTab 1</Text>
          </Tabs.Tab>
          <Tabs.Tab value="tab2">
            <Text>SubTab 2</Text>
          </Tabs.Tab>
          <Tabs.Tab value="tab3">
            <Text>SubTab 3</Text>
          </Tabs.Tab>
        </Tabs.List>
      <H1>DASHBOARD</H1>
      <H5 style={styles.dashText}>FILMS</H5>
      <Tabs.Content value="tab1" style={styles.yellowContainer}>
  <H1>Film 1</H1>
  <H5>Director:</H5>
  <H5>Time:</H5>
</Tabs.Content>
        <Tabs.Content value="tab1" style={styles.yellowContainer}>
        <H1>Film 2</H1>
    <H5>Director:</H5>
    <H5>Time:</H5>
        </Tabs.Content>
        <Tabs.Content value="tab1" style={styles.yellowContainer}>
        <H1>Film 3</H1>
    <H5>Director:</H5>
    <H5>Time:</H5>
        </Tabs.Content>



        <Tabs.Content value="tab2">
          <H5>SubTab 2 Content</H5>
        </Tabs.Content>
        <Tabs.Content value="tab3">
          <H5>SubTab 3 Content</H5>
        </Tabs.Content>
      </Tabs>
    </MyStack>
  );
}
const styles = {
  yellowContainer: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 30,
    width: 'auto', 
    height: 'auto', 
    marginBottom: 15, 
  },

  dashText:{
    marginBottom:40,
  },

  imageStyle: {
    width: 50, // Ancho de la imagen
    height: 50, // Alto de la imagen
    marginTop: 10, // Margen superior
    alignSelf:'flex-end',
    
  },
};

