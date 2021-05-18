import React, {useState} from 'react'
import EmplForm from './EmplForm'
import EmplTable from './EmplTable'

const Home = () => {
  const [tableData, setTableData] = useState([])
  const [isAdd, setAdd] = useState(false)
  const [updateKey, setUpdateKey] = useState('')

  return (
    <div>
      <EmplForm updateKey={updateKey} setUpdateKey={setUpdateKey} isAdd={isAdd} setAdd={setAdd} tableData={tableData} setTableData={setTableData}  />
      <EmplTable setUpdateKey={setUpdateKey} isAdd={isAdd} setAdd={setAdd} tableData={tableData} setTableData={setTableData} />
    </div>
  )
}

export default Home
