import React,{useState,useEffect} from 'react';
import {View,Text,TouchableOpacity,ScrollView,ActivityIndicator} from 'react-native';

import styles from './styles';
// COMPONENTES 

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TaskCard from '../../components/TaskCard';
//conexao api
import api from '../../services/api';
import { func } from 'joi';


export default function Home(){
    
    const [filter,setFilter]=useState('today'); 
    const [tasks,setTasks]=useState([]);
    const [load,setLoad]=useState(false);
    const [lateCount,setLateCount]=useState();
    
    async function loadTask(){
        setLoad(true);
        await api.get(`/task/filter/${filter}/11:11:11:11:11:11`)
        .then(response=>{
            setTasks(response.data)
            setLoad(false);   
        });  
    }

    async function lateVerify(){  
        await api.get(`/task/filter/late/11:11:11:11:11:11`)
        .then(response=>{
            setLateCount(response.data.length)
        });  
    }

     function notification(){
        setFilter('late');
    }


    useEffect(()=>{
        loadTask();
        lateVerify();
    },[filter])

    return (
        <View style={styles.container}>
            <Header showNotification={true}  showBack={false} pressNotification={Notification} late={lateCount}/>
            <View style={styles.filter}>
                <TouchableOpacity onPress={()=>setFilter('all')}>
                    <Text style={
                        filter==='all' ? styles.filterTextActived: 
                        styles.filterTextInative
                        }>
                        Todos
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setFilter('today')}> 
                    <Text style={
                        filter==='today' ? styles.filterTextActived: 
                        styles.filterTextInative
                        }>
                        Hoje
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setFilter('month')}>
                    <Text style={
                        filter==='month' ? styles.filterTextActived: 
                        styles.filterTextInative
                        }>
                         Mês
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setFilter('week')}>
                    <Text style={
                        filter==='week' ? styles.filterTextActived: 
                        styles.filterTextInative
                        }>
                    Semana
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setFilter('year')}>
                    <Text style={
                        filter==='year' ? styles.filterTextActived: 
                        styles.filterTextInative
                        }>
                        Ano
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.title}>
                <Text style={styles.titleText}>TAREFAS</Text>
            </View>
        

            <ScrollView style={styles.content} contentContainerStyle={{alignItems:'center'}}>
                {
                    load
                    ?
            <ActivityIndicator color={'#ee6b26'} size={50}></ActivityIndicator>
            :
                    tasks.map(t =>(
                        <TaskCard done={false} title={t.title} when={t.when} type={t.type}/>
                    ))
                 }
            </ScrollView>
            
            <Footer icon={'add'} />
        </View>
    )
    
}