
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Button, Platform, TextInput,  Image, TouchableOpacity} from 'react-native';

import iconCalender from '../../assets/calendar.png'
import iconClock from '../../assets/clock.png'
import styles from './styles'
import { format, compareAsc } from 'date-fns'
import DateTimePicker from '@react-native-community/datetimepicker';

const dataTime = ({type, save, dateRec}) => {
  const [isPickerShow, setIsPickerShow] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));

  const showPicker = () => {
    setIsPickerShow(true);
  };

  const onChange = (event, value) => {
    useEffect(() => {
      { dateRec ?
        setDate(dateRec)
        :
        setDate(value);
      }
      if (Platform.OS === 'android') {
        setIsPickerShow(false);
      }
    })
  };
  save(type == 'date' ? format(new Date(date), 'yyyy-MM-dd') : format(new Date(date), 'HH:mm:ss'))
  return (

    <View style={styles.container}>

  {!isPickerShow && (
    <TouchableOpacity onPress={showPicker}>
        <TextInput style={styles.input} placeholder={type == 'date' ? 'Clique aqui para definir a data' : 'Clique aqui para Definir a Hora'} editable={false} value={type == 'date'  ? format(new Date(date), 'dd-MM-yyyy') : format(new Date(date), 'HH:mm:ss') }/>
        <Image style={styles.iconTextInput} source={type == 'date' ? iconCalender : iconClock} />
    </TouchableOpacity>
    )}

     
      {/* The date picker */}
      {isPickerShow && (
        <DateTimePicker
          value={date}
          mode={type == 'date' ? 'date' : 'time'}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          is24Hour={true}
          onChange={onChange}
          style={styles.datePicker}
        />
      )}
    </View>
  );
};



export default dataTime;