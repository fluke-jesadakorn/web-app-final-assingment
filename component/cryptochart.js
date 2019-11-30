import React from 'react';
import { StyleSheet, FlatList, Text, View, Image, TouchableHighlight } from 'react-native';
import { dataList } from './json'

export default crypochart = () => {

    renderList = (id, symbol, name, logo) => {
        return (
            <TouchableHighlight onPress = {this.log}>
            <View style={styles.card} onPress={this.log}>
                <Image style={{ width: 25, height: 25, marginTop: 1 }} source={{ uri: logo }} /><Text style={styles.font}> {symbol}/THB</Text>
            </View>
            </TouchableHighlight>
        );
    }

    log = () => {
        return fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=THB&limit=10')
        .then((response) => response.json())
        .then((responseJson) => {
          setFetchJson = responseJson.Data.Data;
        });
    }

    return (
        <View style={styles.background}>
            
                <FlatList
                    data={dataList}
                    renderItem={({ item }) => this.renderList(item.id, item.symbol, item.name, item.logo)}
                    keyExtractor={({ id }, index) => index.toString()}
                />
        </View>
    );

}
const styles = StyleSheet.create({
    header: {

    },
    background: {
        marginTop:0,
        backgroundColor: "lightgray",
    },
    card: {
        padding: 5,
        marginTop: 10,
        marginLeft: "2%",
        width: "96%",
        backgroundColor: "white",
        borderWidth: 5,
        borderRadius: 3,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "space-between",
    },
    font: {
        fontSize: 20
    }
})