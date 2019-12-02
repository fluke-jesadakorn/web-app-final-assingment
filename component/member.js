import React from 'react'
import { Button, View, Text, Image, ListView, ScrollView, StyleSheet } from 'react-native'

export default home = ({ history }) => {
    return (
        <View style = {styles.container}>
        <ScrollView style = {styles.scroll}>
            <Image style={{ height: 200, width: "100%", borderRadius:30}} resizeMode="cover" source={require("./image/fluke.jpg")} />
            <Text style = {styles.font}>เจษฎากร เกิดหนู 5835512119</Text>
            <Image style={{ height: 200, width: "100%", borderRadius:30 }} resizeMode="cover" source={require("./image/pond.jpg")} />
            <Text style = {styles.font}>สิริเทพ ทองด้วง 5835512107</Text>
            <Image style={{ height: 200, width: "100%", borderRadius:30 }} resizeMode="cover" source={require("./image/pan.jpg")} />
            <Text style = {styles.font}>ธงชัย บุตรชาติ 5835512017</Text>
            <Image style={{ height: 200, width: "100%", borderRadius:30 }} resizeMode="cover" source={require("./image/pao.jpg")} />
            <Text style = {styles.font}>พรหมภัณฑ์ ศิริโภคาภิรมย์ 5835512032</Text>
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    scroll:{
        
    },
    container:{
        backgroundColor:"gray",
    },
    font:{
        fontSize:20,
        textAlign:"center",
        color:"white"
    }
})