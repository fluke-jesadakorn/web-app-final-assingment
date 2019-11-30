import React from 'react';
import { StyleSheet, FlatList, ActivityIndicator, Text, View, Image } from 'react-native';

export default class FetchExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            data: []
        }
    }

    renderList(id, symbol, name, logo) {
        return (
            <View style={styles.container}>
                {/* <Text>{id}</Text> */}
                <Text>{symbol}</Text>
                <Text>{name}</Text>
                <Image style = {{width: 66, height: 58}} source = {{uri : logo}}></Image>
            </View>
        );
    }

    render() {
        const { container, font } = styles
        let json = this.props.json
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }

        return (
            <View>
                <FlatList
                    data={this.props.json}
                    renderItem={({ item }) => this.renderList(item.id, item.symbol, item.name, item.logo)}
                    keyExtractor={({ id }, index) => index.toString()}
                />
            </View>
        );

        // return (
        //     <Text>{JSON.stringify(this.state.data)}</Text>
        // )
    }
}
const styles = StyleSheet.create({
    container: {
        padding:5,
        marginBottom:10,
        marginLeft:"2%",
        width:"96%",
        borderRightColor:"black",
        borderWidth:5,
        borderRadius:3,
    },
    font: {
        fontSize: 20
    }
})