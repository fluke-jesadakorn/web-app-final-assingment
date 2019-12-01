import React from "react"
import { StyleSheet, TouchableHighlight, Button, View, TouchableWithoutFeedback, TouchableOpacity } from "react-native"
import NavBar, { NavTitle, NavGroup, NavButton, NavButtonText } from "react-native-nav"

export default navbar = ({ history }) => {
    return (
        <View>
            <NavBar style={styles}>
                <TouchableOpacity onPress={() => history.push('/')}>
                    <NavTitle style={styles.title} >
                        {"Home"}
                    </NavTitle>
                </TouchableOpacity>
                <NavGroup>
                    <NavButton onPress={() => history.push('/chart')}>
                        <NavButtonText style={styles.buttonText} >
                            {"CoinPrice"}
                        </NavButtonText>
                    </NavButton>
                    <NavButton onPress={() => history.push('/member')}>
                        <NavButtonText style={styles.buttonText}>
                            {"Member"}
                        </NavButtonText>
                    </NavButton>
                    <NavButton onPress={() => history.push('/login')}>
                        <NavButtonText style={styles.buttonText}>
                            {"Login"}
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