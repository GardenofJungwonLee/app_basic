import React from 'react';
import main from './assets/main.jpeg';
import { Button, StyleSheet, Alert ,Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import data from './data.json';
import layingsimba from "./assets/layingsimba.jpeg"

export default function App() {
  console.disableYellowBox = true;
  
  let tip = data.tip;
  let todayWeather = 10 + 17;
  let todayCondition = "흐림";

  return (
    <View style={styles.mainCon}>
      <View style={styles.spaceRow}>0.04</View>  
      
      <View style={styles.mainTextCon}><Text style={styles.mainText}>소개 text 0.04 : 나만의 꿀팁</Text></View>  
      <Text style={styles.weather}>오늘의 날씨: {todayWeather + '°C ' + todayCondition} </Text>
      <View style={styles.spaceRow}>0.04</View>  
      
      <View style={styles.mainImg}><Image style={styles.bigmainimg} source={layingsimba}/>메인사진 0.44</View>  
      
      <View style={styles.spaceRow}>0.04</View>  
      
      <View style={styles.buttonPlace}> 
        <ScrollView horizontal style={styles.scrollViews}>
          <TouchableOpacity style={styles.button} onPress={() => Alert.alert('버튼 0.12')}>
            <Text style={styles.btntext}>버튼 0.12</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.button} onPress={() => Alert.alert('버튼 0.12')}>
            <Text style={styles.btntext}>버튼 0.12</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.button} onPress={() => Alert.alert('버튼 0.12')}>
            <Text style={styles.btntext}>버튼 0.12</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.button} onPress={() => Alert.alert('버튼 0.12')}>
            <Text style={styles.btntext}>버튼 0.12</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.button} onPress={() => Alert.alert('버튼 0.12')}>
            <Text style={styles.btntext}>버튼 0.12</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.button} onPress={() => Alert.alert('버튼 0.12')}>
            <Text style={styles.btntext}>버튼 0.12</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.button} onPress={() => Alert.alert('버튼 0.12')}>
            <Text style={styles.btntext}>버튼 0.12</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.button} onPress={() => Alert.alert('버튼 0.12')}>
            <Text style={styles.btntext}>버튼 0.12</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.button} onPress={() => Alert.alert('버튼 0.12')}>
            <Text style={styles.btntext}>버튼 0.12</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.button} onPress={() => Alert.alert('버튼 0.12')}>
            <Text style={styles.btntext}>버튼 0.12</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.button} onPress={() => Alert.alert('버튼 0.12')}>
            <Text style={styles.btntext}>버튼 0.12</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.button} onPress={() => Alert.alert('버튼 0.12')}>
            <Text style={styles.btntext}>버튼 0.12</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.button} onPress={() => Alert.alert('버튼 0.12')}>
            <Text style={styles.btntext}>버튼 0.12</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.button} onPress={() => Alert.alert('버튼 0.12')}>
            <Text style={styles.btntext}>버튼 0.12</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.button} onPress={() => Alert.alert('버튼 0.12')}>
            <Text style={styles.btntext}>버튼 0.12</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.button} onPress={() => Alert.alert('버튼 0.12')}>
            <Text style={styles.btntext}>버튼 0.12</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.button} onPress={() => Alert.alert('버튼 0.12')}>
            <Text style={styles.btntext}>버튼 0.12</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>  

      <View style={styles.spaceRow}>0.04</View>  

      <View style={styles.pictures}>
        <ScrollView style={styles.scrollViews}>
        <View style={styles.cardContainer}>
        {/* 하나의 카드 영역을 나타내는 View */}
        {
        tip.map((content,i)=>{
        return (
        <View key={i}>    
          {/* <Image  source={layingsimba}/>  */}
          <View >
            <Text style={styles.mainText} numberOfLines={1}>사진들 0.24 : {content.title}</Text>
            <Text  numberOfLines={3}>{content.desc}</Text>
            <Text >{content.date}</Text>
          </View>
        </View>)
        })
        }
        </View>
        </ScrollView>  
      </View>  
      
      <View style={styles.spaceRow}>0.04</View>  
    
    </View>
    
  )
 

  
}
 
const styles = StyleSheet.create({
  //전체 컨텐츠 /flex :1 =25
  mainCon: {            
    flex :1 ,                                   
    backgroundColor: '#FFFAFA'
  },   
  mainTextCon:{                   
    flex : 0.04 ,                                     
    backgroundColor: '#FFFAFA',
    backgroundColor:"skyblue"
  },
  mainText:{ 
    margin:10,
    fontSize:15,
    fontWeight:'700'
  },
  spaceRow:{                    
    flex : 0.04 ,                                                                     
    backgroundColor: '#FFFAFA'
  },
  mainImg:{                   
    flex : 0.44 ,
    backgroundColor:"yellow"
  },
  buttonPlace:{                  
    flex : 0.12 ,
    backgroundColor:"purple"
  },
  pictures:{                  
    flex : 0.24 ,
    backgroundColor:"green"
  },
  scrollViews: {
    backgroundColor: 'transplant' ,
    vertical:true
  },
  button: {
    width: 60,
    height: 60,
    backgroundColor: "#fe5746",
    justifyContent: "center",
    alignItems: "center"
  },
  weather:{
    alignSelf:"flex-end",
    paddingRight:20
  },
  btntext: {
    color: "#fff"
  },
  bigmainimg:{
    width:"80%",
    height:"50%" 
  }
});
