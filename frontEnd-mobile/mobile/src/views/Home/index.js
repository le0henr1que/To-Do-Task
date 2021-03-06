import React, {useState, useEffect} from "react";
import {Text, View, TouchableOpacity, ScrollView, ActivityIndicator} from 'react-native'
import styles from "./styles";
import * as Network from 'expo-network'


//Componentes
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TaskCard from "../../components/TaskCard";

import api from "../../services/api";

export default function Home({navigation}){

    const [filter, setFilter] = useState('today');
    const [tasks, setTasks] = useState([]);
    const [load, setLoad] = useState(false)
    const [lateCount, setLateCount] = useState()
    const [macaddress, setMacaddress] = useState()

    async function getMacAddress(){
        await Network.getMacAddressAsync().then(mac => {
            setMacaddress(mac)
       })
    }

    async function loadTask(){
        setLoad(true)
        await api.get(`/task/filter/${filter}/${macaddress}`)
        .then(response => {
            setTasks(response.data)
            setLoad(false)
            // warn(response.data)
        })
        .catch(error => console.log(error))
    }
    async function lateVerify(){
        await api.get(`/task/filter/late/${macaddress}`)
        .then(response => {
            setLateCount(response.data.length)
         
            // warn(response.data)
        })
        .catch(error => console.log(error))
    }
    function Notification(){
        setFilter('late')
    }
    
    function New(){
        navigation.navigate('Task')
    }
    function show(id){
        navigation.navigate('Task', {idTask: id})
    }

    useEffect(() => {
        getMacAddress().then(() => {
            loadTask();
        })
    
        lateVerify()
    }, [filter, macaddress])

    return (
        <View style={styles.container}>   
            <Header showNotification={true} showBack={false} pressNotification={Notification} late={lateCount}/>
            <View style={styles.filter}>
                <TouchableOpacity onPress={() => setFilter('all')}>
                    <Text style={filter == 'all' ? styles.filterTextActived : styles.filterTextInative}>Todos</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFilter('week')}>
                    <Text style={filter == 'week' ? styles.filterTextActived : styles.filterTextInative}>Semana</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFilter('today')}>
                    <Text style={filter == 'today' ? styles.filterTextActived : styles.filterTextInative}>Hoje</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFilter('month')}>
                    <Text style={filter == 'month' ? styles.filterTextActived : styles.filterTextInative}>M??s</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFilter('year')}>
                    <Text style={filter == 'year' ? styles.filterTextActived : styles.filterTextInative}>Ano</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.title}>
                <Text style={styles.titleText}>TAREFAS {filter == 'late' && "ATRASADAS" }</Text>
            </View>

            
            <ScrollView style={styles.content} contentContainerStyle={{alignItems:'center'}}>
            
          
                {
                    load ?
                        <ActivityIndicator size={50}  />
                    :
                    tasks.map(t => (
                        
                        <TaskCard done={false} onPress={() => show(t._id) } title={t.title} when={t.when} type={t.type}/>
                        
                        )
                    )
                    
                }
                
            </ScrollView>
            <Footer icon={'add'} onPress={New} />
        </View>
    )
}