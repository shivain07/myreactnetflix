import React, { useState } from 'react';
import './index.css'



function Todo(){

let[formtxt,setformtxt] =useState('');
let[items,setitem] =useState([]);


const addlist =()=>{
    if(!formtxt){

    }else{
        setitem([...items,formtxt])
        setformtxt('')
    }
   

}
const dellist=()=>{
    setitem([])
}
    
const deletefunc =(index)=>{
    const upditems = items.filter((cval,ind)=>{
        return index !=ind;

    })
    setitem(upditems);

}
    return(
        <>
        <h1>hello</h1>
        <input type ='text' placeholder='enter here' value={formtxt} onChange={(e)=>{setformtxt(e.target.value)}}></input>
        <button onClick={addlist} className='btn'>add</button>
        <button onClick={dellist} className='btn'>Alldelete</button>
<div>

    

{
    items.map((cval,index)=>{

return(
    <div className='box' key={index}>
    <li>{cval} </li>     
    <button className='btn' onClick={()=>deletefunc(index)}>delete</button>
    </div>
)
    })
}

    
</div>
    



        </>
    )

}





export default Todo;