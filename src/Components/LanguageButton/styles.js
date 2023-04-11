import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
	container : {
		flex : 1,
		
	},
	radioButtonContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent : 'space-between',
		borderBottomWidth : 0.3,
		borderColor : 'gray',
		paddingRight : 20,
	  },
	 inner : {
		width : 15,
		height : 15,
		backgroundColor : '#EF712D',
		borderRadius : 100,
	 },
	 outer : {
		borderWidth : 1,
		borderColor : 'gray',
		width : 20, 
		height : 20,
		borderRadius : 100,
		justifyContent : 'center',
		alignItems : 'center'
	 },
	image :{
		width : 60,
		height : 60,
		resizeMode : 'cover',
		borderRadius : 100,
		marginVertical : 10,
		marginLeft : 10,
	},
	text : {
		marginLeft : 20,
		fontSize : 17,
	}
})

export default styles