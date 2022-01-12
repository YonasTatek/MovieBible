import React from 'react';
import { NativeBaseProvider, extendTheme } from 'native-base';
import Container  from './Container';
import { useSelector} from 'react-redux'
export default function () {
    const count = useSelector((state) => state.mytheme.value)
  const theme = extendTheme(count);

  return (
    <NativeBaseProvider theme={theme}>
      <Container />
    </NativeBaseProvider>
  );
}