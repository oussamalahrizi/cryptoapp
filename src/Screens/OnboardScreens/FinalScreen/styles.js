import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container :{
		flex : 1,
		justifyContent : 'space-between',
		alignItems : 'center',
	},
	upperView : {
		marginTop : 60,
		alignItems : 'center'
	},
	lowerView : {
		flex : 0.3,
		alignItems : 'center'
	},
	img :{
		width : 100,
		height : 100
	},
	title :{
		color : 'white',
		fontSize : 20,
		marginTop : 20
	},
	textbtn :{
		backgroundColor : '#EF712D',
		paddingHorizontal : 80, 
		paddingVertical  : 15,
		borderRadius : 8,
		color : 'white',
		marginBottom :  25,
		fontSize : 18,
		fontWeight : '500'
	}
})


export default styles