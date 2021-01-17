import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';

export default function AboutPage() {
  console.disableYellowBox = true;
  //return 구문 밖에서는 슬래시 두개 방식으로 주석
  return (
    <ScrollView style={Styles.container}>
      <Text style={Styles.title}>HI! 스파르타코딩 앱개발 반에 오신것을 환영합니다</Text>
    </ScrollView>
  )

}

const Styles = StyleSheet.create({
  container:{
    backgroundColor:"#fff"
  },
  title:{
    fontSize:20,
    fontWeight:"700",
    marginTop:50 
  }
})