import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container : {
		flex : 1,
		marginVertical : 10,
		marginHorizontal : 5,
		padding : 10,
		paddingBottom  : 30,
		backgroundColor : '#223A6A',
		borderRadius : 10,
		
	},
	upper : {
		flexDirection : 'row',
		justifyContent : 'space-between'
	},
	title : {
		color : 'white',
		fontSize : 20,
		fontWeight : '400',
		marginBottom : 20
	},
	lower : {
		flex : 1,
		flexDirection : 'row',
		justifyContent : 'space-between'
	},
	description :{
		color : 'white',
		flex : 1,
		fontSize : 13,
	},
	btn : {
		backgroundColor : '#EF712D',
		color : 'white',
		paddingHorizontal : 15,
		paddingVertical : 10,
		borderRadius : 7,
		
		fontWeight : '300'
	}
})

export default styles