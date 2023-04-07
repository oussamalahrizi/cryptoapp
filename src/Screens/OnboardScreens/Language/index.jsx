import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import usa from "../../../../assets/countries/usa.png"
import fr from "../../../../assets/countries/fr.png"
import ksa from "../../../../assets/countries/ksa.png"
import logo from "../../../../assets/icon.png"
import LanguageButton from "../../../Components/LanguageButton"
const languages = [
	{
		image : usa,
		country : "usa"
	},
	{
		image : ksa,
		country : "ksa"
	},
	{
		image : fr,
		country : "fr"
	}
]

const Language = () => {
  return (
	<View style={styles.container}>
		<Image style={styles.logo} source={logo} />
		<Text style={styles.choose}>Select a language</Text>
		<LanguageButton />
	</View>
  )
}

export default Language