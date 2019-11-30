import React from 'react';
import { StyleSheet, FlatList, Text, View, Image, TouchableHighlight } from 'react-native';

export default crypochart = (props) => {

    renderList = (id, symbol, name, logo) => {
        return (
            <View style={styles.card} onPress={this.log}>
                <Image style={{ width: 25, height: 25, marginTop: 1 }} source={{ uri: logo }} /><Text style={styles.font}> {symbol}/THB</Text>
            </View>
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
            <TouchableHighlight>
                <FlatList
                    data={props.json}
                    renderItem={({ item }) => this.renderList(item.id, item.symbol, item.name, item.logo)}
                    keyExtractor={({ id }, index) => index.toString()}
                />
            </TouchableHighlight>
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