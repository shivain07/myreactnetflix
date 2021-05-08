
import React, { useState } from 'react';
import './index.css'






function App() {


  let [user, setuser] = useState({
    fname: '',
    lname: '',
    number:''
  });

  const ClickEvent = (e) => {
    e.preventDefault()
    console.log('button working')

    // let [user,setuser] =useState()




  }


const Inputevent=(e)=>{

// let value = e.target.value
// let name = e.target.name


const{name,value} = e.target
setuser((preValue)=>{

return{
  ...preValue,    //using spread operator and object destructuring
  [name]:value
}


//long method ++++++++


// if(name ==='fname'){
//   return{
//     fname:value,
//     lname:preValue.lname,
//     number:preValue.number
//   }
  
// }
// else if(name ==='lname'){
//   return{
//     fname:preValue.fname,
//     lname:value,
//     number:preValue.number
//   }
// }
// else if(name ==='number'){

//   return{
//     fname:preValue.fname,
//     lname:preValue.lname,
//     number:value
//   }
// }


})


}




return (
  <>


<h1>{user.fname}{user.lname}</h1>
<h2>{user.number}</h2>

    <form className='myform' onSubmit={ClickEvent}>
      <input type='text' placeholder='enter name' onChange={Inputevent} name='fname' />
      <input type='text' placeholder='enter password' onChange={Inputevent} name='lname' />
      <input type='number' placeholder='number' onChange={Inputevent} name='number' />
      <button type='submit'>submit</button>

    </form>
   
  </>

);
}

export default App;
