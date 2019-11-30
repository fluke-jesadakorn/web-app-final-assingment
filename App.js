import React, { useState } from 'react'
import ApiChart from './component/cryptochart'
import { dataList } from './component/json'

export default App = () => {
  var [fetchJson, setFetchJson] = useState([]);
  return (
    <ApiChart json={dataList} />
  )
}