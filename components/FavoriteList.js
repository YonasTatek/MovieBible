import React from 'react'
import { View, Text } from 'react-native'
import {getAKeys,getData} from './Keys';
export default function FavoriteList() {
    const [state, setstate] = React.useState(null)
    React.useEffect(() => {
        console.log("eefii")
        getAKeys().then(data=>setstate(data))
         console.log("findkkkk")
             return () => {
           console.log("exitkkk")
             }
         },[])
         if(state==null)
        return  <Text> loadding </Text>
    return (
    
           <View>
           {state.map((a,b)=>{
                   return(<><Text>{a}</Text></>)
   
           })}
           <Text>Favorite</Text>
       </View>
        
    )
}
