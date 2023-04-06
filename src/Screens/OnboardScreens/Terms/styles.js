import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
	container : {
		flex : 1,
	},
	scrollContainer : {
		padding : 10,
		flex : 1,
	},
	title :{
		color : 'white',
		marginTop : 8,
		paddingBottom : 18,
		fontSize : 18,
		fontWeight : "600"
	},
	header :{
		color : 'white',
		paddingVertical : 12,
		fontSize : 17,
		fontWeight : '500'
	},
	text : {
		color : "white",
		fontSize : 14,
		lineHeight : 22,
	},
	acceptContainer :{
		position : 'absolute',
		zIndex : 2,
		backgroundColor : "#3F66B2",
		bottom : 0,
		flex : 1,
		justifyContent : 'center',
		alignItems : 'center',
		width : '100%',
		paddingVertical : 20,
	},
	agree : {
		marginTop : 20,
		backgroundColor : '#EF712D',
		paddingHorizontal : 35,
		paddingVertical : 12,
		borderRadius : 5,
	},
	furtherContainer : {
		marginBottom : 5,
	},
	furthertext : {
		color : 'white',
		marginLeft : 40,
		marginVertical : 8,
		lineHeight : 22,
	},
	copytext : {
		color : 'white',
		paddingHorizontal : 5,
		opacity : 0.9,

	},
	copyContainer : {
		marginBottom : 200,
		marginTop : 100,
		flex: 1,
    	justifyContent: 'center',
    	alignItems: 'center',
	},
	copy : {
		backgroundColor : '#3F66B2',
		borderRadius: 5,
    	paddingHorizontal: 40,
   	 	paddingVertical: 10,
    	alignItems: 'center',
		flexDirection :'row',
		
	}
})

export default styles