import React from 'react'
import ApiChart from './component/cryptochart'
import Home from "./component/home"
import NavigateBar from "./component/navbar"
import Login from "./component/login"
import Member from './component/member'
import { View, StyleSheet } from 'react-native'
import { NativeRouter, Switch, Route } from "react-router-native"

export default App = () => {
  return (
    <View style={styles.container}>
      <NativeRouter>
        <Route component={NavigateBar} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/chart" component={ApiChart} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/member" component={Member} />
        </Switch>
      </NativeRouter>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
  }
})