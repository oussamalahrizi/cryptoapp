import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Language from '../OnboardScreens/Language'
import Terms from '../OnboardScreens/Terms'

const Onboarding = () => {
	const Stack = createNativeStackNavigator();
  return (
	<Stack.Navigator initialRouteName='Terms' screenOptions={{headerShown : false
	}}>
		<Stack.Screen name='Terms' component={Terms} />
		<Stack.Screen name='Language' component={Language} />
	</Stack.Navigator>
  )
}

export default Onboarding
