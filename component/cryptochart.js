import React from 'react';
import { StyleSheet, FlatList, ActivityIndicator, Text, View } from 'react-native';

export default class FetchExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: []
        }
    }

    componentDidMount() {
        return fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=THB&limit=10')
            .then((response) => response.json())
            .then((responseJson) => {
                const getData = responseJson.Data.Data;
                console.log(getData)
                this.setState({
                    isLoading: false,
                    data: getData,
                });
            });
    }

    renderList(item) {
        return (
        <View>
            <Text>{item}</Text>
        </View>
        );
    }

    render() {
        const { container, font } = styles
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
                    data={this.state.data}
                    renderItem={({ item }) => this.renderList(item.close)}
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
        flex: 1,
        padding: 10,
        flexDirection: "column",
    },
    font: {
        fontSize: 20
    }
})