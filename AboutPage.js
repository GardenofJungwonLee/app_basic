import React from 'react';
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity, ScrollView} from 'react-native';

export default function AboutPage() {
  console.disableYellowBox = true;
  
  //return 구문 밖에서는 슬래시 두개 방식으로 주석
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>HI! 스파르타코딩 앱개발 반에 오신것을 환영합니다</Text>
      
      <View style={Styles.centerCon}> 
            <Image style={Styles.midimg} source={{url:"https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2FaboutImage.png?alt=media&token=13e1c4f6-b802-4975-9773-e305fc7475c4"}}/> 
            <Text style={Styles.txt01}>많은 내용을 간결하게 담아내려 노력했습니다!</Text>
            <Text style={Styles.txt02}>꼭 완주하셔서 꼭 여러분것으로 만들어가시길 바랍니다</Text>
            <TouchableOpacity style={Styles.btnbox}><Text style={Styles.btntxt} onPress={() => Alert.alert('없음')}>여러분의 인스타계정</Text></TouchableOpacity>
        </View> 
      </View> 
  )

}

const Styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#262c74"
  },
  title:{
    fontSize:25,
    color:"white",
    fontWeight:"700",
    marginTop:50,
    margin:30
  },
  centerCon:{
    flex: 1.8,
    marginLeft:20,
    width:280,
    marginBottom:100,
    backgroundColor: 'white',
    borderRadius: 20, 
    alignItems:"center"
  },
  midimg:{
    width:150,
    height:150,
    borderRadius:30,
    marginTop:80
  },
  btnbox:{
    backgroundColor:"orange",
    padding:20,
    borderRadius:15
  },
  btntxt:{
    color:"#fff",
    fontSize:15,
    fontWeight:"700"
  },
  txt01:{
    textAlign:"center",
    fontSize:19,
    fontWeight:"700",
    paddingLeft:22,
    paddingRight:22
  },
  txt02:{
    textAlign:"center",
    fontSize:13,
    fontWeight:"700",
    padding:22
  }


})