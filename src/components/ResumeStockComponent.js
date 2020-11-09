import React, {useEffect,useState} from 'react';
import {View, Text, StyleSheet,FlatList, Dimensions, Image,Button, TextInput, TouchableOpacity} from 'react-native';
import {StockContainer} from '../containers/index.js';
import axios from 'axios';
import {apiUrl} from '../../app.json';

function ResumeStockComponent() {
    const stockContainer = StockContainer.useContainer();
  useEffect(() => {

  },[]);
  return (
    <View>
      <FlatList
        data={stockContainer.getStock()}
        style={{
            height: (Dimensions.get('window').height *0.56),
        }}
        renderItem={({item}) => (
            <View>
                <Text>{item.name}</Text>
            </View>
        )}
        keyExtractor={item => String(item.id)}
        />
    </View>
    
  );
}
export default ResumeDetails;
