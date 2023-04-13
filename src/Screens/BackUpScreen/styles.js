import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container : {
		flex : 1,
		alignItems : 'center',
		gap : 20
	},
	title : {
		fontSize : 25,
		color : 'white',
		fontWeight : '400',
		marginVertical : 20
	},
	description : {
		color : 'white',
		textAlign : 'center',
		marginHorizontal : 40,
		fontSize : 15
	},
	btnText : {
		marginVertical : 10,
		color : 'white',
		paddingVertical :15,
		paddingHorizontal : 18,
		backgroundColor : '#FF6903',
		borderRadius : 5,
		fontSize : 18,
		fontWeight : '500'
	}
})

export default styles