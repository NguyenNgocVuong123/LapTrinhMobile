import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={style1.container}>
        <View style={style1.square1}>
        <Text >Square 1</Text></View>
        <View style={style1.square2}>
        <Text >Square 2</Text></View>
        <View style={style1.square3}>
        <Text >Square 3</Text></View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f5f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const style1 = StyleSheet.create({
  container: {
    
    backgroundColor: '#f7f5f7',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection:'row',
    width:400,
    height:700,
  },
  square1:{
    backgroundColor: '#6fcbf2',
    width:75,
    height:75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  square2:{
    backgroundColor: '#036c99',
    width:75,
    height:75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  square3:{
    backgroundColor: '#d143ca',
    width:75,
    height:75,
    alignItems: 'center',
    justifyContent: 'center',
  },
});