import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import styled from 'styled-components/native'

import ChartScreen from './Chart'

const SHome = styled.View`
  background: dodgerblue;
  flex: 1;
  align-items: center;
  justify-content: center;
`

const SHomeHeader = styled.Text`
  padding: 10px 0;
  font-size: 20px;
  font-weight: bold;
  color: white;
`

const SHomeBtn = styled.TouchableOpacity`
  background: white;
  font-size: 20px;
  padding: 10px 30px;
  color: dodgerblue;
  border-radius: 13px;
  margin-top: 10px;
`

const SHomeBtnText = styled.Text`
  font-size: 20px;
  color: dodgerblue;
`

const SFlatList = styled.FlatList`
  flex: none;
`

const SListItem = styled.Text`
  font-size: 18px;
  margin: 10px 0;
`

function HomeScreen({ navigation }) {
  return (
    <SHome>
      <SHomeHeader>COVID-19 Tips</SHomeHeader>
      <SFlatList
        data={[
          { key: 'Wash your hands' },
          { key: 'Wear a mask' },
          { key: 'Stay at home' }
        ]}
        renderItem={({ item }) => <SListItem>{item.key}</SListItem>}
      />

      <SHomeBtn
        onPress={() => navigation.navigate('Chart')}
      >
        <SHomeBtnText>View Covid Chart</SHomeBtnText>
      </SHomeBtn>
    </SHome>
  )
}

const Stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} options={{ title: 'Tips' }} />
        <Stack.Screen name='Chart' component={ChartScreen} options={{ title: 'Deaths in Poland Last Week' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
