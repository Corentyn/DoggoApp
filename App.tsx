import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Button} from 'react-native-paper';

export default function App() {
  return (
    <>
    <View style={styles.container}>
      <Text style={styles.mainTitle}>DoggoApp 🐶</Text>
      <StatusBar style="auto" />
    </View>

    <View style={styles.title}>
      <Text style={styles.textBeforeButton}>If you want to see a Doggo, click here !✨</Text>
      <Button style={styles.buttonDoggo}><Text style={styles.textButton}>Doggo</Text></Button>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8ef6e4',
    alignItems: 'center',
    paddingTop:75,
    height:"25%"
  },
  mainTitle:{
    color:'#9896f1',
    fontSize:25,
    fontWeight:'bold',
  },
  title: {
    flex:1,
    alignItems: 'center',
    backgroundColor:"#8ef6e4",
    
  },
  buttonDoggo: {
    marginTop:40,
    backgroundColor: "#9896f1",
    borderColor:"black"
  },
  textBeforeButton: {
    fontSize:32,
    fontWeight:"900",
    color: "#9896f1"
  },

  textButton: {
    color:"#fff",
    fontWeight:"bold"
  },
});
