import React from 'react';
import {Text, View,Image,TouchableOpacity} from 'react-native';
import styles from './styles';

//ICONES

import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';
import qrcorde from '../../assets/qrcode.png';
import back from '../../assets/back.png';

export default function Header({showNotification,showBack,late,pressNotification}){
    return(
        <View style={styles.header}>
        {
        showBack ?
            <TouchableOpacity style={styles.leftIcon}>
            <Image source={back} style={styles.leftIconImage}/>
            </TouchableOpacity>
            :
            <TouchableOpacity style={styles.leftIcon}>
            <Image source={qrcorde} style={styles.leftIconImage}/>
            </TouchableOpacity>
           }

           <Image source={logo} style={styles.logo}/>
           {
           showNotification &&
           <TouchableOpacity style={styles.notification} onPress={pressNotification}>
               <Image source={bell} style={styles.notificationImage}/>
               <View style={styles.circle}>
                    <Text style={styles.notificationText}>{late}</Text>
               </View>
               </TouchableOpacity>
               }
        </View>
    );
}

