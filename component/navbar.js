import React from "react"
import { StyleSheet, TouchableHighlight, Button, View } from "react-native"
import NavBar, { NavTitle,NavGroup,NavButton,NavButtonText } from "react-native-nav"

export default navbar = ({ history }) => {
    return (
        <View>
            <NavBar style={styles}>
                <TouchableHighlight onPress={() => history.push('/home')}>
                    <NavTitle style={styles.title} onPress = {() => history.push('/t')}>
                        {"Home"}
                    </NavTitle>
                </TouchableHighlight>
                <NavGroup>
                    <NavButton onPress = {() => history.push('/chart')}>
                        <NavButtonText style={styles.buttonText}>
                            {"Chart"}
                        </NavButtonText>
                    </NavButton>
                    <NavButton>
                        <NavButtonText style={styles.buttonText}>
                            {"Button"}
                        </NavButtonText>
                    </NavButton>
                    <NavButton>
                        <NavButtonText style={styles.buttonText}>
                            {"Button"}
                        </NavButtonText>
                    </NavButton>
                </NavGroup>
            </NavBar>
        </View>
    )
}

const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: '#000',
    },
    navBar: {
        backgroundColor: '#212121',
    },
    title: {
        color: '#fff',
    },
    buttonText: {
        color: '#b5b5b5',
    },
    statusBar: {
        backgroundColor: '#68efad',
    },
})