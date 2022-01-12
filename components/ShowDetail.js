import React,{useCallback,useState,useEffect,useMemo} from 'react'
import { View, Text,Dimensions} from 'react-native'

import {Box,StatusBar,FlatList,NativeBaseProvider ,Fab,Icon, Divider,Image,HStack,VStack,ScrollView} from "native-base"
import SearchBar from './SearchBar'
import ListComponents from './ListComponents'
import axios from 'axios'
import Spinner from './Spinner'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import {AdMobBanner} from 'expo-ads-admob';
import Constants from 'expo-constants';
import { fontWeight } from 'styled-system'


const { height, width } = Dimensions.get('window');

const cellHeight = height;
const cellWidth = width;


export default function ShowDetail({route,navigation}) {
    const {titleid,title} =route.params;
    const [value, onChangeText] = useState(route.params.title);

    React.useLayoutEffect(() => {
      navigation.setOptions({
        title: value === '' ? '' : value,
      });
    }, [navigation, value]);
  
  
    const [result, setresult] = useState([])
    const [sresult, setsresult] =useState(titleid)
  const [state, setstate] = useState('loading')
 
    const testID = 'ca-app-pub-3940256099942544/6300978111';
    const productionID = 'ca-app-pub-1230332355636658/3477247130';
    const adUnitID = Constants.isDevice && !__DEV__ ? productionID : testID;

useEffect(() => {
  if(sresult.length&&sresult.includes('title/')){
    
  
 
const url="https://kasopiaapi.herokuapp.com/titleid?search=".concat(sresult)

 axios.get(url)
 .then(function (response) {
     
   // handle successklj
   if(response.data.type=="found"){
        setresult(response.data.data)
     
        setstate("found")
   }
   if(response.data.type=="not found"){
     setresult([]),{
       titleid:props.value?.titleid
     }
     setstate("not found")
   }
 


 
 })
 .catch(function (error) {
   // handle error
   setstate("not found")
   
 })
 .then(function () {
   // always executed
 });


}
 

  return () => {
 
  }
}, [sresult])
  


    return (
  
    <NativeBaseProvider>
  {  
  state=="loading"?<View style={{flex:1,backgroundColor:"#94a3b8"}}>
<Spinner size="lg"  color="blue.500" />
  </View>:state=="found"?
      <View style={{flex:1,backgroundColor:"#334155"}}>
      <ScrollView>
       <Image
      source={{
        uri:result.img?result.img:null,
      }}
      resizeMode={"contain"}
      alt="Alternate Text"
       height={cellHeight/2}
    />   
    <Text fontSize={"2xl"} style={{color:"white",fontWeight:"bold",textAlign:"center"}}>{title}</Text>
  
    <View style={{alignItems:"center"}}>
  {result.list?
    <HStack space={3} alignItems="center">
      {
        result.list?result.list.map((value,index)=>{
         return<Text fontSize="xl" style={{color:"white"}}>{value}</Text>
        }):<></>
      }
      </HStack>:<></>
      
}
</View>
<Box style={{alignItems:"center"}}   p={2} shadow={2}>
  {result.genres?
    <HStack space={3} alignItems="center">
      {
        result.genres?result.genres.map((value,index)=>{
         return<Text fontSize="xl" style={{color:"white"}}>{value}</Text>
        }):<></>
      }
      </HStack>:<></>
      
}
</Box>
<Divider my={2} />
<Box style={{alignItems:"center" }}   p={4} shadow={2} >
  {result.credit?
    <VStack space={3} paddingLeft={10}>
      {
        result.credit?result.credit.map((value,index)=>{
         return<Text style={{color:"white"}} ><Text fontSize={"2xl"}  style={{fontWeight:"bold",textDecorationLine:"underline"}}>{value[0]}</Text> : {value[1]} </Text>
        }):<></>
      }
      </VStack>:<></>
      
}
</Box>
<Divider my={2} />
<Box
  p={4}
 _text={{
  fontSize: "md",
  fontWeight: "bold",
  color: "white",
}}
style={{padding:15}}
shadow={1}
>

{
  result?.plot? <><Text fontSize="2x1"  style={{textAlign:'center',fontWeight:"bold",color:"white",textDecorationLine:"underline"}}>Story</Text><Text fontSize={'lg'} style={{color:"white"}}>{result.plot}</Text></>:<></>
}
</Box>
</ScrollView>

<AdMobBanner
  bannerSize="FullBanner"
  adUnitID={adUnitID} // Test ID, Replace with your-admob-unit-id
  servePersonalizedAds // true or false
   />

          </View>:<View style={{backgroundColor:"#94a3b8",flex:1 ,alignItems:"center",justifyContent:"center"}}><Text style={{color:"#334155",fontSize:35,fontWeight:"bold"}}>Network Error</Text></View>
}
         </NativeBaseProvider>
    )
}
