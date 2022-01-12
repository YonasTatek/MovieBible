import React from "react"
import {
  Spinner,
  HStack,
  useColorModeValue,
  Center,
  NativeBaseProvider,
} from "native-base"
export const Example = () => {
  return (
   
  
    <Spinner color="blue.500" />

   
  )
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Example />
      </Center>
    </NativeBaseProvider>
  )
}
