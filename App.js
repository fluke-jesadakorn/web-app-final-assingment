import React, { useState } from 'react'
import ApiChart from './component/cryptochart'
import { dataList } from './component/json'

export default App = () => {
  const [fetchJson, getFetchJson] = useState([]);
  console.log(dataList)
  return (
    <ApiChart />
  )
}