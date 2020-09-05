import React, { useState , Component} from "react";
import { SafeAreaView, FlatList, TextInput, StyleSheet, Text, View, Alert, Button } from "react-native";
import { format } from "date-fns";
import { addMonths } from "date-fns";
import { subMonths } from "date-fns";

// contains information about current month and year
const header = () => {
   const[value, onChangeText] = useState('Employee Name');
   const dateFormat = "MMMM yyyy";
   const [currentDate, setCurrentDate] = useState(new Date());

   return (
      <View>
         <View>
            <View onClick={prevMonth}>
            </View>
         </View>
         <Text>
            <Text>{format(currentDate, dateFormat)}</Text>
         </Text>
         <View>
            <View onClick={nextMonth}>
            </View>
         </View>
      </View>
   );
};

const WEEKDAYS = [
   {
      id: 0,
      title: '',
   },
   {
      id: 1,
      title: 'Saturday',
   },
   {
      id: 2,
      title: 'Sunday',
   },
   {
      id: 3,
      title: 'Monday',
   },
   {
      id: 4,
      title: 'Tuesday',
   },
   {
      id: 5,
      title: 'Wednesday',
   },
   {
      id: 6,
      title: 'Thursday',
   },
   {
      id: 7,
      title: 'Friday',
   },
];

const DATA = [
   {
      id: 'yeet',
      name: 'Michael',
      phone: '2069462212',
      schedule: ['9-5', '0', '0', '0','0','0','0']
   },
   {
      id: 'yeet2',
      name: 'Roudy',
      phone: '2069462212',
      schedule: ['9-5', '0', '0', '0','0','0','0']
   },
]

// Functions
const nextMonth = () => {
   setCurrentDate(addMonths(currentDate, 1));
};
const prevMonth = () => {
   setCurrentDate(subMonths(currentDate, 1));
};

const logButtonPressed = () => (
   console.log('pressed a button')
);

const Schedule = ({ name }) => {
   return (
      <View style={styles.row}>
         <TextInput style={styles.item} onChangeText={text => onChangeText(text)}
      value='hello'/>
         <TextInput style={styles.item}>{name}</TextInput>
         <TextInput style={styles.item}>{name}</TextInput>
         <TextInput style={styles.item}>{name}</TextInput>
         <TextInput style={styles.item}>{name}</TextInput>
         <TextInput style={styles.item}>{name}</TextInput>
         <TextInput style={styles.item}>{name}</TextInput>
         <TextInput style={[styles.item, {borderRightWidth:'thin'}]}>{name}</TextInput>
      </View>
   )
};

// Weekdays
const Day = ({ title }) => {
      return (
         <View onClick={logButtonPressed}>
            <Text style={styles.weekday}>{title}</Text>
         </View>
      )
   };


const App = () => {

   const renderDay = ({ item }) => (
      <Day title={item.title} />
   );

   return (
      <SafeAreaView style={styles.container}>
         <View>{header()}</View>
         <FlatList
            data={WEEKDAYS}
            renderItem={renderDay}
            keyExtractor={item => item.id}
            numColumns={8}
         />
         <Schedule />
         <Schedule />
         <Schedule />
         <Schedule />
         <Button title='Add'></Button>
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   container: {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
   },
   Month: {
      textAlign: 'center',
      display: 'flex',
      width: '100%',
      alignItems: 'center',
   },
   weekday: {
      textAlign: 'center',
      width: 125,
      padding: 20,
      marginVertical: 4,
      marginHorizontal: 3,
   },
   box: {
      borderWidth: 1,
   },
   row: {
      flex: 1,
      flexDirection:'row',
   },
   item: {
      borderWidth:'thin',
      borderRightWidth:0,
      // backgroundColor: 'lightgray',
      textAlign: 'center',
      width: 130,
      padding: 20,
      // marginVertical: 4,
      // marginHorizontal: 1,
   },
   colorBlue: {
      backgroundColor: 'blue',
   },
});

export default App;