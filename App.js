import React, { useState } from 'react'
import ApiChart from './component/cryptochart'
import { dataList } from './component/json'

export default App = () => {
  var [fetchJson, setFetchJson] = useState([]);

  fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=THB&limit=10')
    .then((response) => response.json())
    .then((responseJson) => {
      setFetchJson = responseJson.Data.Data;
    });
  return (
    <ApiChart json={dataList} />
  )
}