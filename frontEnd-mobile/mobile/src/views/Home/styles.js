import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor:'#FFF', 
        alignItems: 'center', 
        justifyContent: 'flex-start'
    }, 
    filter:{
        flexDirection: 'row', 
        width: '100%', 
        justifyContent: 'space-around',
        height: 70, 
        alignItems: 'center'
    }, 
    filterTextActived:{
        fontWeight: 'bold', 
        fontSize: 18, 
        color: '#EE6B26'
    }, 
    filterTextInative:{
        fontWeight: 'bold', 
        fontSize: 18, 
        color: '#20295f', 
        opacity: 0.5
    }, 
    content:{
        width: '100%',
        marginTop: 30,
    }, 
    titleText:{
        fontSize: 20,
        color: '#20295f', 
        opacity: 0.5,
        fontWeight: 'bold', 
    }
})

export default styles