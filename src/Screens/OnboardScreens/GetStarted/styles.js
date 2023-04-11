import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	bigContainer : {
		flex : 1,
		marginTop :15,
		alignItems : 'center'
	},
	btn :{
		position :'absolute',
		bottom :50,
		
		paddingHorizontal : 130,
		paddingVertical : 12,
		borderRadius : 5
	},
	btnText :{
		color : 'white',
		opacity : 0.9,
		fontSize : 15
	},
	swiper :{
		flex : 0.9
	},
	dot : {
		width : 12,
		height : 12,
		backgroundColor : '#254178',
		margin :  2,
		borderRadius : 100
	},
	activeDot :{
		width : 15,
		height : 15,
		backgroundColor : '#4766AB',
		margin :  2,
		borderRadius : 100,
		padding : 5,
		borderWidth : 1.5,
		borderColor : '#4766AB'
	}
})

export default styles