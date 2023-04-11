import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container : {
		flex : 1,
		marginTop  : 50,
		justifyContent : 'space-between',
		marginBottom : 60,
	},
	logo : {
		width: 100,
		height : 100,
		resizeMode : 'contain',
		marginBottom : 20,
	},
	choose : {
		fontSize : 17,
		color : "white"
	},
	langContainer : {
		marginTop : 50,
		backgroundColor : 'white',
		marginHorizontal : 30,
	},
	continuebtn :{
		alignItems : 'center'
	},
	continuetxt :{
		color : 'white',
		backgroundColor : "#EF712D",
		paddingHorizontal : 120,
		paddingVertical : 12,
		fontSize : 16,
		borderRadius : 8,
	}
})

export default styles