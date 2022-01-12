import React from 'react'
import { View,Dimensions} from 'react-native'
import { Box ,HStack,Center,VStack,Image,Text,Pressable} from "native-base"

const { height, width } = Dimensions.get('window');

const cellHeight = height;
const cellWidth = width;
export default function ListComponents(props) {

    return (
<Pressable onPress={()=>props.navigation.push('Show',{
  titleid:props.value.titleid,
  title:props.value.name
})}>
        <Box
      
      p={4}
      _text={{
        fontSize: "md",
        fontWeight: "bold",
        color: "white",
      }}
      borderRadius={10}
    style={{backgroundColor:"#0c4a6e"}}
      marginTop={3}
     marginLeft={2}
    key={props.number}
    >
          <HStack space={3} alignItems="center">
          <Center
        
          
          rounded="md"
        >
            {/* <Button  variant="solid" onPress={() =>storeData(props.value?.image,props.value?.name)


          
  } iconLeft  colorScheme="blue"  transparent>
            <MaterialIcons name="favorite" size={24} color="" />  
            </Button> */}
           <Text style={{color:"white"}}>{props.number+1}</Text>
             
    
        </Center>
       
          <Image
      source={{
        uri:props.value?.image,
      }}
      resizeMode={"contain"}
      alt="Alternate Text"
      size={"sm"}
    />
    <View style={{ flex:1,marginRight:10}}>
    <Text style={{color:"white" ,fontWeight:"100"}}>
         
     {props.value?.name}
          </Text>
        </View>
       
       
          </HStack>
      
    </Box>
    </Pressable>
    )
}
