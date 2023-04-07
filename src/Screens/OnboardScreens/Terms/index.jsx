import { View, Text, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native'
import * as  Clipboard from 'expo-clipboard';
import React from 'react'
import styles from './styles'
import english from "../../../lang/en"
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const Terms = () => {
	const navigation = useNavigation();
	const gonext = ()=>{
		navigation.navigate("Language")
	}
	const copyTos = async ()=>
	{
		var values = Object.values(english.terms).join(' ')
		
		await Clipboard.setStringAsync(values)
		ToastAndroid.show("Copied to Clipboard!", ToastAndroid.SHORT)
	}
  return (
	<SafeAreaView style={{flex: 1}}>
		<View style={styles.acceptContainer}>
			<Text style={{color : 'white'}}>By clicking 'I Agree', you agree to Jaxx</Text>
			<Text style={{color : 'white'}}>Libery's Terms of Service</Text>
			<TouchableOpacity style={styles.agree} onPress={gonext}>
				<Text style={{color : 'white', fontSize : 16}}>I AGREE</Text>
				</TouchableOpacity>
		</View>
	<ScrollView showsVerticalScrollIndicator={false}  style={styles.scrollContainer} >
	  <Text style={styles.title}>Terms of Service</Text>

	  <Text style={styles.header}>Jaxx Liberty</Text>
	  <Text style={styles.text}>{english.terms.JaxxLiberty}</Text>

	  <Text style={styles.header}>Legal Agreement</Text>
	  <Text style={styles.text}>{english.terms.LegalAgreement}</Text>

	  <Text style={styles.header}>You Are In Control Of Your Digital Assets</Text>
	  <Text style={styles.text}>{english.terms.YouAreInControl}</Text>

	  <Text style={styles.header}>Backup Phrases</Text>
	  <Text style={styles.text}>{english.terms.BackupPhrases1}</Text>
	  <Text style={styles.text}>{english.terms.BackupPhrases2}</Text>

	  <Text style={styles.header}>Your Use of Jaxx Liberty</Text>
	  <Text style={styles.text}>{english.terms.YourUseofJaxx}</Text>

	  <Text style={styles.header}>Privacy By Design</Text>
	  <Text style={styles.text}>{english.terms.PrivacyByDesign}</Text>

	  <Text style={styles.header}>Digital Asset Transactions</Text>
	  <Text style={styles.text}>{english.terms.DigitalAssetTransactions}</Text>
	  
	  <Text style={styles.header}>Digital Assets, Cryptocurrencies, and Tokens</Text>
	  <Text style={styles.text}>{english.terms.DigitalAssets}</Text>
	  
	  <Text style={styles.header}>Third Party Service Provider Risks & Disclaimer</Text>
	  <Text style={styles.text}>{english.terms.ThirdPartyServiceRisks}</Text>
	  
	  <Text style={styles.header}>Third Party Service Provider Affiliate Fees</Text>
	  <Text style={styles.text}>{english.terms.ThirdPartyServiceProvider}</Text>
	  
	  <Text style={styles.header}>In-App Data</Text>
	  <Text style={styles.text}>{english.terms.InAppData}</Text>
	  
	  <Text style={styles.header}>myJAXX</Text>
	  <Text style={styles.text}>{english.terms.myJAXX}</Text>
	  
	  <Text style={styles.header}>Complimentary Technical Support</Text>
	  <Text style={styles.text}>{english.terms.ComplimentaryTechnicalSupport}</Text>
	  
	  <Text style={styles.header}>Updates</Text>
	  <Text style={styles.text}>{english.terms.Updates}</Text>
	  
	  <Text style={styles.header}>No Responsibility For Transaction Delays</Text>
	  <Text style={styles.text}>{english.terms.NoResponsibility}</Text>

	  <Text style={styles.header}>Limited License</Text>
	  <Text style={styles.text}>{english.terms.LimitedLicense}</Text>

	  <Text style={styles.header}>No Warranty</Text>
	  <Text style={styles.text}>{english.terms.NoWarranty}</Text>

	  <Text style={styles.header}>Backend Servers</Text>
	  <Text style={styles.text}>{english.terms.BackendServers}</Text>

	  <Text style={styles.header}>App Store Additional Terms</Text>
	  <Text style={styles.text}>{english.terms.AppStore}</Text>

	  <Text style={styles.header}>Indemnification</Text>
	  <Text style={styles.text}>{english.terms.Indemnification}</Text>

	  <Text style={styles.header}>Limitation of Liability</Text>
	  <Text style={styles.text}>{english.terms.LimitationofLiability}</Text>

	  <Text style={styles.header}>Further Legal Terms</Text>
	  <Text style={[styles.text, {marginBottom : 5}]}>The following legal terms also apply : </Text>
		<View style={styles.furtherContainer}>
			<Text style={styles.furthertext}>a. {english.terms.FurtherLegalTerms1}</Text>
			<Text style={styles.furthertext}>b. {english.terms.FurtherLegalTerms2}</Text>
			<Text style={styles.furthertext}>c. {english.terms.FurtherLegalTerms3}</Text>
			<Text style={styles.furthertext}>d. {english.terms.FurtherLegalTerms4}</Text>
			<Text style={styles.furthertext}>e. {english.terms.FurtherLegalTerms5}</Text>
			<Text style={styles.furthertext}>f. {english.terms.FurtherLegalTerms6}</Text>
		</View>

		<Text style={styles.header}>Contact Information</Text>
	  <Text style={styles.text}>{english.terms.ContactInformation1}</Text>
	  <Text style={styles.text}> <Text style={{textDecorationLine: 'underline', color : 'white'}}>https://support.decentral.ca.</Text>
	{english.terms.ContactInformation2}</Text>
	<View style={styles.copyContainer}>
	<TouchableOpacity style={styles.copy} onPress={copyTos}>
		<MaterialIcons name="content-copy" size={24} color="white" />
		<Text style={styles.copytext}>Copy the ToS</Text>
	</TouchableOpacity>
	</View>
	
	</ScrollView>
	</SafeAreaView>
  )
}

export default Terms
