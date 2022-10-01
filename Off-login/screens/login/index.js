import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity
} from 'react-native';
import Btns from '../../src/btn';
import Ips from '../../src/input';
import Logos from '../../src/logo';
export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Logos></Logos>
      <View style={styles.viewtop}><Text style={styles.titleText}>Xin chào</Text></View>
      <Text style={{ margintop: 10 }}>Đã có tài khoản?</Text>
      <Btns color="#81d3e3" Text='Đăng nhập' onPress={() => {navigation.navigate('SignIn') }} ></Btns>
      <Text style={{ margintop: 15 }}>Chưa có tài khoản?</Text>
            <Btns color="#8e64a1" Text='Đăng kí' onPress={() => {navigation.navigate('SignUp') }}></Btns>
      {/* <View style={{margin: 10}}><TouchableOpacity onPress={() => {navigation.navigate('SignInScreen') }} style={styles.BtnC}>
        <Text>Log In</Text>
      </TouchableOpacity></View>
      <View style={{margin: 10}}><TouchableOpacity onPress={() => {navigation.navigate('SignUpScreen') }} style={styles.BtnC}>
        <Text>Sign Up</Text>
      </TouchableOpacity></View> */}
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  BtnC:{
    backgroundColor: "#81d3e3",
        paddingHorizontal: 80,
        paddingVertical: 15,
        borderRadius: 30,
        alignItems: "center",
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: 'blue'

  },
  tText: {
    fontSize: 20,
    margin: 10,

  },
  viewtop: {
    margin: 20
  }
});
