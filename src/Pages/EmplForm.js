import React, {useState, useEffect} from 'react'

const EmplForm = ({isAdd, setAdd,updateKey,setUpdateKey,tableData, setTableData}) => {

  useEffect(()=>{
    if(updateKey!==''){
      const data = tableData[updateKey]
  
      setFname(data.fname)
      setLname(data.lname)
      setEmail(data.email)
    }
  },[updateKey])

  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')

  const handleChange = (e)=>{
    if(e.target.name==='fname'){
      setFname(e.target.value)
    }
    if(e.target.name==='lname'){
      setLname(e.target.value)
    }
    if(e.target.name==='email'){
      setEmail(e.target.value)
    }
  }
  
  const handleSubmit = ()=>{
    if(fname!==''&&lname!==''&&email!==''){
      const newData = {
        key:updateKey!==''?tableData.length:updateKey,
        fname, lname, email
      }
      let prevData=[]
      if(updateKey===''){
         prevData = [...tableData, newData ]
      }else{
        prevData = [...tableData]

        prevData[updateKey] = newData

        setUpdateKey('')
      }
      setTableData(prevData)
  
      setFname('')
      setLname('')
      setEmail('')
      
      setAdd(false)
    }else{
      alert('all field are required')
    }
    
  } 

  return (
    <div>
     <button onClick={()=>setAdd(true)}>
       Add Employee
     </button>

     {isAdd&&<div>
       <input style={{margin:10}} name='fname' value={fname} onChange={(e)=>handleChange(e)} placeholder='first name'/>
       <input style={{margin:10}} name='lname' value={lname} onChange={(e)=>handleChange(e)}  placeholder='last name'/>
       <input style={{margin:10}} name='email' value={email} onChange={(e)=>handleChange(e)}  placeholder='email id'/>
       <button onClick={()=>handleSubmit()}>Submit</button>
     </div>}
    </div>
  )
}

export default EmplForm
