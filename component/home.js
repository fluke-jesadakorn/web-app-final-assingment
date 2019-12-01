import React from 'react'
import { Button, View, Text } from 'react-native'
export default home = ({ history }) => {
    return (
        <View>
            <Text>this is home</Text>
            <Button title = "test" onPress={() => history.push("/")} />
        </View>
    )
}