import React, {useState, useEffect} from "react";
import {Text, View, TouchableOpacity, ScrollView} from 'react-native'
import styles from "./styles";

//Componentes
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TaskCard from "../../components/TaskCard";

import api from "../../services/api";

export default function Home(){

    const [filter, setFilter] = useState('today');
    const [tasks, setTasks] = useState([]);

    async function loadTask(){
        await api.get('/task/filter/all/11:11:11:11:11:11')
        .then(response => {
            setTasks(response.data)
            // warn(response.data)
        })
        .catch(error => console.log(error))
    }

    useEffect(() => {
        loadTask();
    })

    return (
        <View style={styles.container}>   
            <Header showNotification={true} showBack={false}/>
            <View style={styles.filter}>
                <TouchableOpacity onPress={() => setFilter('all')}>
                    <Text style={filter == 'all' ? styles.filterTextActived : styles.filterTextInative}>Todos</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFilter('week')}>
                    <Text style={filter == 'week' ? styles.filterTextActived : styles.filterTextInative}>Semana</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFilter('month')}>
                    <Text style={filter == 'month' ? styles.filterTextActived : styles.filterTextInative}>Mês</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFilter('year')}>
                    <Text style={filter == 'year' ? styles.filterTextActived : styles.filterTextInative}>Ano</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.title}>
                <Text style={styles.titleText}>TAREFAS</Text>
            </View>

            <ScrollView style={styles.content} contentContainerStyle={{alignItems:'center'}}>
                {
                    tasks.map(t => (
                        
                        <TaskCard done={false}/>
                        
                        )
                    )
                    
                }
                
            </ScrollView>
            <Footer icon={'add'} />
        </View>
    )
}