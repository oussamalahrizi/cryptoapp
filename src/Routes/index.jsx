
import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainStack from '../Screens/MainStack';
import Onboarding from '../Screens/Onboarding';

const Stack = createNativeStackNavigator();

const Routes = ({onboard}) => {
	const theme = {
		...DefaultTheme,
		colors: {
		  ...DefaultTheme.colors,
		  background: "#091D42",
		},
	   };
  return (
	<NavigationContainer theme={theme}>
		<Stack.Navigator initialRouteName={onboard ? 'MainStack' : 'Onboarding'} screenOptions={
			{
				headerShown : false,
			}
		}>
			<Stack.Screen name="Onboarding"  component={Onboarding}/>
			<Stack.Screen name='MainStack' component={MainStack}/>
		</Stack.Navigator>
	</NavigationContainer>
  )
}

export default Routes