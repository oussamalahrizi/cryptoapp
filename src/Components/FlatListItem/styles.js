import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container :{
		justifyContent : 'space-between',
		alignItems : 'center',
		backgroundColor : '#4766AC',
		marginHorizontal : 20,
		borderRadius : 10,
		paddingVertical : 20,
		paddingHorizontal : 15,
		marginTop : 10
	},
	title :{
		color : 'white',
		fontSize : 20,
		fontWeight : 'bold',
		textAlign : 'center'
	},
	image :{
		width : 300,
		height : 300,
		resizeMode : 'contain'
	},
	description : {
		color : 'white',
		fontSize : 16,
		textAlign : 'center',
		marginVertical : 20,
	}
})

export default styles