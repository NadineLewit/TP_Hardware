import React from 'react';
import {
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {All} from "./styles.js"


const ActInd = () => {
  return(
    <SafeAreaView>
      <ActivityIndicator size="large" style={All.carg}/>
    </SafeAreaView>
  );
};
export default ActInd;