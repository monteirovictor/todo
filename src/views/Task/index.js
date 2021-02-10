import React,{useState,useEffect} from 'react';
import {
    View,
    ScrollView,
    Image,
    Text,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    Switch

}from 'react-native';

import styles from './styles';
// COMPONENTES 

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import typeIcon from '../../utils/typeIcons';


export default function Task(){
    
  return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
          <Header showBack={true}/>
          <ScrollView style={{width:'100%'}}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  {
                      typeIcon.map(icon=>(
                    <TouchableOpacity>
                        <Image source={icon} style={styles.imageIcon}/>
                    </TouchableOpacity>
                    ))
                    }
              </ScrollView>
              <Text style={styles.label}>Título</Text>
              <TextInput style={styles.input} maxLength={30} placeholder="Lembre-me de fazer"/>

              <Text style={styles.label}>Detalhes</Text>
              <TextInput style={styles.input} maxLength={200}  multiline={true} placeholder="Detalhes da Atividade"/>

          </ScrollView>
      </KeyboardAvoidingView>
  )

    
}