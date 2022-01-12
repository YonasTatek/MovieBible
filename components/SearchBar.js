import React,{useState,useCallback} from "react";
import { Input, Icon } from "native-base";
import { Ionicons } from '@expo/vector-icons';


export default function (props) {
  const [search, setsearch] =useState('')
const onText =useCallback((value)=>{
  setsearch(value)
},
  [],
)
const submit=useCallback(
  ()=>props.si(search),
  [search],
)
  return (


    <Input
    placeholder="Search"
    variant="filled"
    width="100%"
    bg="gray.200"
    borderRadius={10}
    py={1}
    px={2}
    value={search}
    _web={{
      _focus: { borderColor: 'muted.300', style: { boxShadow: 'none' } },
      }}
    InputLeftElement={<Icon size='sm' ml={2} size={5} color="gray.400" as={<Ionicons name="ios-search" />} />}
    onSubmitEditing={submit}
   onChangeText={onText}
  />
     
    
  );
}