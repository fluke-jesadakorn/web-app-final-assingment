import React from 'react'
import { Button, View, Text, Image, ListView, ScrollView } from 'react-native'

export default home = ({ history }) => {
    return (
        <ScrollView>
            <Image style={{ height: 200, width: 200 }} resizeMode="center" source={require("./image/fluke.jpg")} />
            <Text>เจษฎากร เกิดหนู 5835512119</Text>
            <Image style={{ height: 200, width: 200 }} resizeMode="center" source={require("./image/pond.jpg")} />
            <Text>สิริเทพ ทองด้วง 5835512107</Text>
            <Image style={{ height: 200, width: 200 }} resizeMode="center" source={require("./image/pan.jpg")} />
            <Text>ธงชัย บุตรชาติ 5835512017</Text>
            <Image style={{ height: 200, width: 200 }} resizeMode="center" source={require("./image/pao.jpg")} />
            <Text>พรหมภัณฑ์ ศิริโภคาภิรมย์ 5835512032</Text>
        </ScrollView>
    )
}