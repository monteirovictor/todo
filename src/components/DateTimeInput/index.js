import React,{useState} from 'react';
import {Platform} from 'react-native';
import DateTimeInputAndroid from './DateTimeInput/index.android';
import DateTimeInputIOS from './DateTimeInput/index.ios';

export default function Index(){
    return(
        Platform.OS==='android'? <DateTimeInputAndroid/>:<DateTimeInputIOS/>
    );
}