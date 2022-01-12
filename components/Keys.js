import AsyncStorage from '@react-native-async-storage/async-storage';

  export const storeData = async (key="",value="") => {
    try {
     const s =value.concat(key)
      await AsyncStorage.setItem(s,"true")
    } catch (e) {
        console.log("err saving")
      // saving error
    }
    console.log("sucess fully saved")
  }
 


 export  const getAKeys = async () => {
    let keys = []
    try {
      keys = await AsyncStorage.getAllKeys()
      return keys
    } catch(e) {
      // read key error
      return null
    }
  
   // console.log(keys)
    // example console.log result:
    // ['@MyApp_user', '@MyApp_key']
  }
  
  


  export const getData = async (input) => {
    try {
      const value = await AsyncStorage.getItem(input)
      if(value !== null) {
       return value
      }
    } catch(e) {
     return null
    }
  }
  
  