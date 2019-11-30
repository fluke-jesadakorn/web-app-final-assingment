import React from 'react'
import ApiChart from './component/cryptochart'
import Home from "./component/home"
import NavigateBar from "./component/navbar"
import { View, StyleSheet } from 'react-native'
import { NativeRouter, Switch, Route } from "react-router-native"
export default App = () => {
  return (
    <View style= {styles.container}>
      <NativeRouter>
      <Route path="/" component={NavigateBar} />
        <Switch>          
          <Route exact path="/home" component={Home} />
          <Route exact path="/chart" component={ApiChart} />
        </Switch>
      </NativeRouter>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop:0,
  }
})