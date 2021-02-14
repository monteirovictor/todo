import React, {useState} from 'react';
import {
    TouchableOpacity, 
    Image, 
    TextInput,
    DatePickerAndroid,
    TimePickerAndroid,  
    Alert,
  } from 'react-native'


import styles from './styles';
import iconCalendar from '../../assets/calendar.png';
import iconClock from '../../assets/clock.png';

export default function DateTimeInputAndroid({type}){

    const [datetime,setDateTime]=useState();

    async function SelectDataOrHour(){
        if(type=='date'){
            const {action,year,month,day} = await DatePickerAndroid.open({
                mode:'calendar'
            });

            if(action == DatePickerAndroid.dateSetAction)
            setDateTime(`${day} - ${month} - ${year}`);
        
        }else{
            const {action,hour,minuto} = await TimePickerAndroid.open({
                is24Hour:true
            });
            if(action != TimePickerAndroid.dismissedAction)
                setDateTime(`${hour}:${minuto}`);
        }
    }


    return (
        <TouchableOpacity onPress={SelectDataOrHour}>
            <TextInput style={styles.input} placeholder={type == 'date' ? 'Clique aqui para definir uma data':
            'Clique aqui para definir uma hora'} editable={false} value={datetime} />
            <Image style={styles.iconTextInput} source={type == 'date' ? iconCalendar:iconClock} />
        </TouchableOpacity>
    )
}