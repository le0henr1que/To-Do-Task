import React, {useState, useEffect} from "react";

import {View, ScrollView, Image, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, Switch, Alert, ActivityIndicator} from 'react-native'
import * as Network from 'expo-network'

// Compontentes
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import styles from "./styles";
import typeIcons from '../../utils/typeIcons'

import api from '../../services/api'

import DateTimeInput from '../../components/DateTimeInput/index.android'

export default function Task({navigation, idTask}){
    const [id, setId] = useState()
    const [done, setDone] = useState(false)
    const [type, setType] = useState()
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [date, setDate] = useState()
    const [hour, setHour] = useState()
    const [macaddress, setMacaddress] = useState()
    const [load, setLoad] = useState(true)

    async function New(){
       

        if(!title)
        return Alert.alert('Defina o Nome da Terefa')

        if(!description)
        return Alert.alert('Defina a descrição da Terefa')

        if(!type)
        return Alert.alert('Defina um tipo para a Terefa')

        if(!date)
        return Alert.alert('Defina uma data para a Terefa')

        if(!hour)
        return Alert.alert('Defina uma hora para a Terefa')

        if(id){
            await api.put(`/task/${id}`, {
                macaddress: macaddress,
                done,
                type:type,
                title:title,
                description:description,
                when:`${date}T${hour}.000`,
            
            }).then(() =>{
                navigation.navigate('Home')
            })
        }else{

    
            await api.post('/task', {
                macaddress: macaddress,
                type:type,
                title:title,
                description:description,
                when:`${date}T${hour}.000`,
            
            }).then(() =>{
                navigation.navigate('Home')
            })

        }
    }
    async function loadTask(){
        await api.get(`task/${id}`).then(response => {
            setLoad(true)
            setDone(response.data.done)
            setType(response.data.type)
            setTitle(response.data.title)
            setDescription(response.data.description)
            setDate(response.data.when)
            setHour(response.data.when)
        })
    }

    async function getMacAddress(){
        await Network.getMacAddressAsync().then(mac => {
            setMacaddress(mac)
            setLoad(false)
       })
    }

    useEffect(() => {
        getMacAddress()
        
        if(navigation.state.params){
            setId(navigation.state.params.idTask)
            loadTask().then(()=> setLoad(false))

        }
            
       
    })

    function Back(){
        navigation.navigate('Home')
    }

    return(
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Header showBack={true} onPress={Back}/>
            {
                load ?
                    <ActivityIndicator size={50}  />
                :
                    <ScrollView style={{width: '100%'}}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginVertical:10}}>
                            {
                                typeIcons.map((icon, index) => (
                                    icon != null &&
                                    <TouchableOpacity onPress={() => setType(index)}>
                                        <Image source={icon} style={[styles.imageIcon, type && type != index && styles.typeIconInative]}/>
                                    </TouchableOpacity>
                                ))
                            }
                        </ScrollView>
                        
                        <Text style={styles.label}>Titulo</Text>
                        <TextInput style={styles.input} maxLength={30} placeholder="Lembre-me de Fazer..." onChangeText={(text) => setTitle(text)} value={title}/>

                        <Text style={styles.label}>Detalhes</Text>
                        <TextInput style={styles.inputArea} maxLength={200} multiline={true} placeholder="Detalhes da Atividade que eu tenho que lembrar..." onChangeText={(text) => setDescription(text)} value={description}/>
                        
                        <Text style={styles.label}>Data</Text>
                        <DateTimeInput type={'date'} save={setDate} dateRec={date} />
                        <Text style={styles.label}>Hora</Text>
                        <DateTimeInput type={'time'} save={setHour} dateRec={hour}/>
                        {   id &&
                            <View style={styles.inLine}>
                                <View style={styles.inputInLine}>
                                    <Switch onValueChange={() => setDone(!done)} value={done} thumbColor={done ? '#00761B' : '#EE6B26'}/>
                                    <Text style={styles.switchLabel}>Concluído</Text>
                                </View>

                                <TouchableOpacity>
                                    <Text style={styles.removeLabel}>Excluír</Text>
                                </TouchableOpacity>
                            </View>
                        }
                    </ScrollView>
            }
        <Footer icon={'save'} onPress={New} />
        </KeyboardAvoidingView>

    )
}