import React,{Suspense} from 'react'
import { View, Text } from 'react-native'
import {getAKeys,getData} from './Keys';
const Display =React.lazy(()=>import('./FavoriteList'))
function Favorite() {
   
     
   
    return (
       console.log("bicthee"),
        <>
        <Suspense fallback={<Text>loading</Text>}>
        <Display></Display>
        </Suspense>
        </>
    )
}

export default Favorite;