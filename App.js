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

const NameBox = (props) => {
   return (
         <View>
         <Text style={[styles.item, styles.name]}> Michael Scherrer</Text>
         <Text style={styles.item}> In/Out</Text>
         <Text style={styles.item}> In/Out</Text>
         </View>
   );
}

const DoubleBox = (props) => {
   return (
         <View>
         <TextInput style={styles.item}></TextInput>
         <View style={styles.item} />
         <View style={styles.item} />
         </View>
   );
}

const EndBox = (props) => {
   return (
         <View>
         <TextInput style={styles.endItem}></TextInput>
         <View style={styles.endItem} />
         <View style={styles.endItem} />
         </View>
   );
}


const Schedule = ({ props }) => {
   return (
      <View style={styles.row}>
         <NameBox props={props}/>
         <DoubleBox props={props}/>
         <DoubleBox props={props}/>
         <DoubleBox props={props}/>
         <DoubleBox props={props}/>
         <DoubleBox props={props}/>
         <DoubleBox props={props}/>
         <EndBox />
      </View>
   )
};

// Weekdays
const Day = ({ title }) => {
      return (
         <View>
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
         <Button title='Add' onPress={logButtonPressed}></Button>
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
      height: 55,
      width: 130,
      padding: 20,
   },
   endItem: {
      borderWidth:'thin',
      borderRightWidth:'thin',
      height: 55,
      width: 130,
      padding: 20,
   },
   hours: {
      height: 40,
   },
   name: {
      textAlign:'center',
   },
   colorBlue: {
      backgroundColor: 'blue',
   },
});

export default App;