import React, { useState } from 'react';
import { StyleSheet, FlatList, Text, View, Image, TouchableHighlight, ScrollView } from 'react-native';
import { dataList } from './json'

export default Home = () => {
    return (
        <ScrollView style={styles.background}>
            <Image style={{ width: "100%", height: 200 }} source={(require("./image/01_btc.jpg"))} />
            <Image style={{ width: "100%", height: 200 }} source={(require("./image/02_eth.png"))} />
            <Image style={{ width: "100%", height: 200 }} source={(require("./image/03_bch.png"))} />
            <Image style={{ width: "100%", height: 200 }} source={(require("./image/04_xrp.jpeg"))} />
            <Image style={{ width: "100%", height: 200 }} source={(require("./image/01_btc.jpg"))} />
            <Image style={{ width: "100%", height: 200 }} source={(require("./image/01_btc.jpg"))} />
            <Image style={{ width: "100%", height: 200 }} source={(require("./image/01_btc.jpg"))} />
            <Image style={{ width: "100%", height: 200 }} source={(require("./image/01_btc.jpg"))} />
            <Image style={{ width: "100%", height: 200 }} source={(require("./image/01_btc.jpg"))} />
            <Image style={{ width: "100%", height: 200 }} source={(require("./image/01_btc.jpg"))} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    header: {

    },
    background: {
        marginTop: 0,
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