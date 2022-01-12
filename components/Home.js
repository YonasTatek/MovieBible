import React,{useCallback,useState,useEffect,useMemo} from 'react'
import { View, Text,Dimensions} from 'react-native'

import {Box,StatusBar,FlatList,NativeBaseProvider ,Fab,Icon, Divider} from "native-base"
import SearchBar from './SearchBar'
import ListComponents from './ListComponents'
import axios from 'axios'
import Spinner from './Spinner'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import {AdMobBanner} from 'expo-ads-admob';
import Constants from 'expo-constants';

const { height, width } = Dimensions.get('window');

const cellHeight = height;
const cellWidth = width;


export default function Home(props,{navigation}) {
  const memorizedItem =useMemo(() => renderItem, [result])

const renderItem =useCallback(
  ({ item, index, separators }) => (
  
   <ListComponents value={item} number={index} id={item.id} key={item.id} navigation={props.navigation}></ListComponents>



   ),
  [result],
)
const renderKey=useCallback(
  (item,index) => item.id,
  [result],
)

    const [searchinput,setsearchinput] = useState('')
    const [result, setresult] = useState([])
    const [sresult, setsresult] =useState("no input")
    const testID = 'ca-app-pub-3940256099942544/6300978111';
    const productionID = 'ca-app-pub-2547649076272908/3717479738';
    const adUnitID = Constants.isDevice && !__DEV__ ? productionID : testID;
useEffect(() => {

   if(!searchinput.length==''){
     
      setsresult("loading")
  const url="https://kasopiaapi.herokuapp.com/title?search=".concat(searchinput)
  
    axios.get(url)
    .then(function (response) {
   
      // handle success
      if(response.data.type=="found"){
           setresult(response.data.data)
           setsresult("found")
      }
      if(response.data.type=="not found"){
        setresult([]),{
          titleid:props.value?.titleid
        }
        setsresult("not found")
      }
    
 

    
    })
    .catch(function (error) {
      // handle error
      
    })
    .then(function () {
      // always executed
    });
  
  
   }
    return () => {
      
    }
}, [searchinput])
function setsearchfunc(value){
 setsearchinput(value)

}

    return (
    <NativeBaseProvider>
         <View flex={1} style={{backgroundColor:"#FFFFFF"}}>
        
       <StatusBar></StatusBar>
        <Box
      bg="#0f172a"
      p={4}
      _text={{
        fontSize: "md",
        fontWeight: "bold",
      
      }} 
    >
  <SearchBar si={setsearchfunc}  style={{marginTop:100}}></SearchBar>
    </Box>
 
 {
  sresult=="loading"?
  
  <View style={{backgroundColor:"#94a3b8",flex:1}}><Spinner size="lg" />
  </View>:sresult=="found"? <FlatList
   data={result}
   initialNumToRender={25}
   maxToRenderPerBatch={10}
   renderItem={renderItem}
   keyExtractor={renderKey}
   getItemLayout={(_data, index) => ({
    length: cellHeight,
    offset: cellHeight * 35,
    index,
  })}
  windowSize={5}
   removeClippedSubviews={true}
   updateCellsBatchingPeriod={100} 
   removeClippedSubviews={true}
   
   windowSize={7}
 />:sresult=="not found"?<View style={{flex:1,alignItems:"center",justifyContent:"center"}}>

<Text style={{color:"white",textAlign:"center",fontWeight:"bold",fontSize:30}}>no result found</Text>
 </View>:<>
 <View style={{flex:1,backgroundColor:"#e2e8f0",alignItems:"center",justifyContent:"center"}}>
<Text style={{color:"#334155",fontSize:35}}>Movie Bible</Text>
 </View>
 
 </>

}

<Fab icon={<Icon color="#040918" as={MaterialCommunityIcons} name="human" size="sm" />} onPress={()=>props.navigation.navigate('About')} />
<AdMobBanner
  bannerSize="FullBanner"
  adUnitID={adUnitID} // Test ID, Replace with your-admob-unit-id
  servePersonalizedAds // true or false
   />
      </View>
          
         </NativeBaseProvider>
    )
}
