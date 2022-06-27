import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    input:{
        fontSize:18, 
        padding: 10,
        width: '95%', 
        borderBottomWidth: 1, 
        borderBottomColor: '#EE6B26', 
        marginHorizontal:10

    }, 
    iconTextInput:{
        position: 'absolute', 
        left: '90%', 
        top: 15,
        width: 25, 
        height: 25, 
        resizeMode: 'contain'
    }, 
    datePicker: {
        width: 320,
        height: 260,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }

})

export default styles