import React from 'react';
import {Text,View,Image,TouchableOpacity} from 'react-native';

import styles from './styles';
import iconDefault from '../../assets/default.png';

export default function TaskCard({done}){
    return (

        <TouchableOpacity style={[styles.card,done && styles.done]}>
            <View style={styles.cardLeft}>
                <Image source={iconDefault} style={styles.typeActive}></Image>
                <Text style={styles.cardTitle}>Hora do Sexo</Text>
            </View>
            <View style={styles.cardRight}>
            <Text style={styles.cardDate}>31/01/2021</Text>
            <Text style={styles.cardTime}>19:01</Text>
            </View>

        </TouchableOpacity>
    )
        
        }