import React, { useState } from 'react'
import ApiChart from './component/cryptochart'
import { dataList } from './component/json'

export default App = () => {
  const [fetchJson, getFetchJson] = useState([]);
  return (
    <ApiChart json = {dataList}/>
  )
}