
import { NativeBaseProvider, StatusBar } from "native-base";
import {useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold} from '@expo-google-fonts/roboto';

import { SignIn } from './src/screens/Signin'
import {Loading} from './src/components/Loading';

import { THEME } from './src/styles/theme'

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_700Bold, Roboto_500Medium, Roboto_400Regular});


  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />


        { fontsLoaded ?
            <SignIn/> : 
              <Loading/>
        } 

    </NativeBaseProvider>
  );
}

