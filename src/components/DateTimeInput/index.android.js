import React, {useState} from 'react';
import {TouchableOpacity,Image,TextInput,DatePickerAndroid,TimePickerAndroid}from 'React-native';

import styles from './styles';
import iconCalendar from '../../assets/calendar.png';
import iconClock from '../../assets/clock.png';

export default function DateTimeInputAndroid({type}){

    const [datetime,setDateTime]=useState();

    async function SelectDataOrHour(){
        
    }

}