import React, { useState } from "react";
import { SafeAreaView, FlatList, StatusBar, StyleSheet, Text, View, Alert } from "react-native";
import { format } from "date-fns";
import { addMonths } from "date-fns";
import { subMonths } from "date-fns";

// contains information about current month and year
const header = () => {
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
      title: '*',
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

const HOURS = [
   {
      id: 'early',
      description: '9-5',
      hours: '9-5',
   },
]

const EMPLOYEES = [
   {
      id: 'yeet',
      name: 'Michael',
      phone: '2069462212',
   },
   {
      id: 'yeet2',
      name: 'Roudy',
      phone: '2069462212',
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

// Days of the week and thier numbers TODO: grid of employees should be within.
const Day = ({ title }) => {

   const renderHours = ({ item }) => (
      <Item description={item.description} />
   );

   // conditionally render column
   console.log(title);

   if (title !== '*') {
      return (
         <View style={styles.box} onClick={logButtonPressed}>
            <Text style={styles.item}>{title}</Text>

            <FlatList
               listKey={title + 'list'}
               data={HOURS}
               renderItem={renderHours}
               keyExtractor={item => item.id}
            />

         </View>
      )
   }
   else
   {
      return (
         <View style={styles.box} onClick={logButtonPressed}>
            <Text style={styles.item}>{title}</Text>
         </View>
      )
   }
};

const Item = ({ description }) => {
   return (
      <View style={styles.row}>
         <Text style={styles.item}>{description}</Text>
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
   box: {
      borderWidth: 1,
   },
   row: {
      borderTopWidth: 1,
   },
   item: {
      backgroundColor: 'lightgray',
      textAlign: 'center',
      width: 125,
      padding: 20,
      marginVertical: 4,
      marginHorizontal: 3,
   },
   colorBlue: {
      backgroundColor: 'blue',
   },
});

export default App;