import React from 'react'
import { View, Text,Image } from 'react-native'
import { color, marginRight } from 'styled-system'
import {AdMobBanner} from 'expo-ads-admob';
import Constants from 'expo-constants';

export default function About() {
  const testID = 'ca-app-pub-3940256099942544/6300978111';
  const productionID = 'ca-app-pub-2547649076272908/3717479738';
  const adUnitID = Constants.isDevice && !__DEV__ ? productionID : testID;
    return (
        
        <View style={{backgroundColor:"#1e293b",flex:1}}>
<Text style={{color:"white",fontWeight:"bold",fontSize:40,textAlign:"center"}}>Movie Bible</Text>
<Image
        style={{  width:"100%",height:"50%" }}
        source={require('../assets/profile.jpg')}
      />
      <Text style={{color:"white",fontSize:20,textAlign:"center"}}>Developer:<Text> Yonas Tatek</Text></Text>
      <View style={{marginTop:20,marginBottom:15}}>
      <Text style={{color:"white" ,fontStyle:"italic",fontSize:15,textAlign:"center"}}>This app is intended for searching and displaying movie,series and tv shows</Text>
      </View>
      <Text style={{textAlign:"center" ,color:"white"}}>verison:0.0.2</Text>
      <AdMobBanner
  bannerSize="largeBanner"
  adUnitID={adUnitID} // Test ID, Replace with your-admob-unit-id
  servePersonalizedAds // true or false
   />
        </View>
    )
}
