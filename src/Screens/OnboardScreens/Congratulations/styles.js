import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
	container :{
		flex : 1,
		justifyContent : 'space-around',
		alignItems : 'center',
		backgroundColor : '#FF6903',
		paddingHorizontal : 20,
	},
	img :{
		width  : 100,
		height : 100,
		resizeMode : 'contain'
	},
	upperView :{
		alignItems : 'center'
	}
})

export default styles