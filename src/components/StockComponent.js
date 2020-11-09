import React, {useState, useEffect, Fragment} from 'react';
import {Text, View, ScrollView,TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import {Card, Button, Icon, Header} from 'react-native-elements';
import {UserContainer} from '../containers/index.js';
import {StockContainer} from '../containers/index.js';
import Ionicons from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import {apiUrl} from '../../app.json';

function StockComponent() {
  const [data, setData] = useState(null);
  const userContainer = UserContainer.useContainer();
  const stockContainer = StockContainer.useContainer();

  useEffect(() => {
    stockContainer.refreshStock(userContainer.tokken)
    setData(stockContainer.getProduct());
  }, [userContainer, stockContainer]);
  return (
    <View>
      {data ? (
      <ScrollView>
        <Card title={data.name} image={{uri:apiUrl+'/storage/pictures/'+data.picture}}>
          <Text>Stock : </Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="rgb(180, 180, 180)"
            keyboardType="numeric"
            value={data.stock.toString()}
            onChangeText={number => stockContainer.changeQuantity(number)}
          />
          <Text style={{marginBottom: 10}}>{` ${data.unit}`}</Text>
          <View style={styles.buttonOk}>
            <Button
              onPress={() => stockContainer.validateProduct()}
              title="ok"
              color="darkred"
            />
          </View>
          <View style={styles.buttonPrev}>
            <Button
              onPress={() => stockContainer.previousProduct()}
              title="<"
              color="darkred"
            />
          </View>
          <View style={styles.buttonNext}>
            <Button
              onPress={() => stockContainer.nextProduct()}
              title=">"
              color="darkred"
            />
          </View>
        </Card>
      </ScrollView>
      ) : <Text>Empty</Text>}
    </View>
  );
}
export default StockComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  picker: {
    backgroundColor: 'lightgrey',
    height: 30, 
    width: "90%",
    marginTop:10,
    marginRight:"5%",
    marginLeft:"5%",
  },
  Card: {
    marginLeft: 'auto',
    marginRight:'auto',
    width: "100%",
    height: 100,
    backgroundColor: 'white',
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
  },
  topCard:{
    display: 'flex',
    flexDirection: "row",
    justifyContent:'flex-start',
    height: 100,
    padding: 5,
    paddingTop:25,
  },
  ImageCard: {
    width: 50,
    height: 50,
  },
  TitleCard: {
    marginTop: 5,
    marginLeft: 5,
    fontSize: 20,
  },
  informationCard:{
    position:'absolute',
    top: 55,
    left: 62,
    display: 'flex',
    flexDirection: "row",
  },
  buttonOk:{
    position:"absolute",
    width:40,
    top:"20%",
    left: "10%",
  },
  buttonPrev:{
    position:"absolute",
    width:40,
    bottom: 0,
    left: "12%",
  },
  buttonNext:{
    position:"absolute",
    width:40,
    bottom: 0,
    left: "88%",
  },
  input:{
    // position:"absolute",
    backgroundColor:"lightgray",
    borderBottomColor:"black",
    borderBottomWidth:1,
    width:50,
    height:40,
    // top:30,
    // left:210,
    textAlign:"center"
  },
  price:{
    color:"black",
    height:30,
    borderBottomColor:"lightgrey",
    borderBottomWidth:1,
    backgroundColor:"lightgrey",
    paddingTop:3
  },
  validation: {
    backgroundColor:"lightgreen",
    padding: 5,
    width:"90%",
    alignItems: "center",
    marginRight:"5%",
    marginLeft:"5%",
    marginTop: 5,
  }
});