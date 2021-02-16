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
import DateTimeInput from '../../components/DateTimeInput';

export default function Task(){

    const [done,setDone]=useState(false);

  return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
          <Header showBack={true}/>
          <ScrollView style={{width:'100%'}}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginVertical:10}}>
                  {
                      typeIcon.map(icon=>(
                          icon !=null &&
                    <TouchableOpacity>
                        <Image source={icon} style={styles.imageIcon}/>
                    </TouchableOpacity>
                    ))
                    }
              </ScrollView>
              <Text style={styles.label}>Título</Text>
              <TextInput style={styles.input} maxLength={30} placeholder="Lembre-me de fazer"/>

              <Text style={styles.label}>Detalhes</Text>
              <TextInput style={styles.inputarea} maxLength={200}  multiline={true} placeholder="Detalhes da Atividade"/>
                <DateTimeInput type={'date'}/>
                <DateTimeInput type={'hour'}/>
              <View style={styles.inLine}>
                  <View style={styles.inputInline}>
                    <Switch onValueChange={()=>setDone(!done)} value={done} thumbColor={done ?'#00761b' : '#ee6b26'}/>
                    <Text style={styles.switchLabel}>Concluído</Text>
                  </View>
                  <TouchableOpacity>
                      <Text style={styles.removeLabel}>EXCLUIR</Text>
                  </TouchableOpacity>
              </View>

          </ScrollView>
          <Footer icon={'save'}></Footer>
      </KeyboardAvoidingView>
  )

    
}