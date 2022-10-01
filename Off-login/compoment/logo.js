import React from 'react';
import {Image} from 'react-native'


export default function Logos() {
    return (
      <Image source={require('../img/logo.png')  } style={{ width: 80, height: 80 }}></Image>  
    );
  }