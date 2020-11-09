import React, {useState, useEffect, Fragment} from 'react';
import {Text, View, ScrollView,TouchableOpacity } from 'react-native';
import {Card, Button, Icon, Header} from 'react-native-elements';
import {UserContainer} from '../containers/index.js';
import {BasketContainer} from '../containers/index.js';
import Ionicons from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import {apiUrl} from '../../app.json';

function StockComponent() {
  const [data, setData] = useState(null);
  const userContainer = UserContainer.useContainer();
  useEffect(() => {
    axios
      .get('/api/products/1', {
        headers: {Authorization: 'Bearer ' + userContainer.tokken},
      })
      .then(response => {
        setData(response.data.data);
      })
      .catch(error => console.log(error));
  }, [userContainer]);
  return (
    <View>
      {data ? (
      <ScrollView>
        <Card title={data.name} image={{uri:apiUrl+'/storage/pictures/'+data.picture}}>
          <Text style={{marginBottom: 10}}>{data.details}</Text>
          <Text style={{marginBottom: 10}}>{`stock: ${data.stock}, prix: ${data.price} CHF`}</Text>
          <TouchableOpacity
          style={{backgroundColor:"#0f20d9",width:"15%",marginLeft:"80%",borderRadius:20,alignItems: "center"}}
          onPress={() => console.log("ok")}
          >
            <Text style={{color: 'white'}}>ok</Text>
          </TouchableOpacity>
        </Card>
      </ScrollView>
      ) : <Text>Empty</Text>}
    </View>
  );
}
export default StockComponent;