import React from 'react'

const EmplTable = ({isAdd, setAdd,setUpdateKey,tableData, setTableData}) => {
  const handleUpdate = (key)=>{
    setUpdateKey(key)
    setAdd(true)
  }

  const handleDelete = (key)=>{
    const prevData = [...tableData]
    
    prevData.splice(key, 1)

    setTableData(prevData)
  }
  
  return (
    <div>
      <table style={{width:'100%', border:'1px soild #000', textAlign:"left", marginTop:10}}>
        <tr>
        <th style={styles.tabs}>First Name</th>
        <th style={styles.tabs}>Last Name</th>
        <th style={styles.tabs}>Email</th>
        <th style={styles.tabs}>Actions</th>
        </tr>

        {tableData.map((item)=>(
          <tr key={item.key}>
            <td>{item.fname}</td>
            <td>{item.lname}</td>
            <td>{item.email}</td>
            <td>
              <button onClick={()=>handleUpdate(item.key)}>update</button>
              <button onClick={()=>handleDelete(item.key)} style={{marginLeft:10}}>delete</button>
            </td>
          </tr>
        ))}
      </table>
      
    </div>
  )
}

export default EmplTable

const styles = {
  tabs:{margin:10, width:'20%',border:'1px soild #000'}
}
