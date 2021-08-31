import React, { useState, useEffect } from 'react';


function Main() {

    const[userData, setUserName] = useState([]);
    // const[userAge, setUserAge] = useState("");
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=9')
        .then(results => results.json())
        .then(data =>{
            console.log(data)
            setUserName(data.results);
        });
    },[])
    function setUserAge(){
        alert('Toggle Age');
    }

    return (
        <>
          {
          userData.map((user) => (

        <div class="card mb-3 mx-auto" style={{width: '600px', margin: '45px', padding:'30px'}}>
        <div class="row g-0" >
        <div class="col-md-4">
        <img src={user.picture.large} class="img-fluid rounded-start" alt="user-img"/>
        </div>
        <div class="col-md-8">
        <div class="card-body" style={{color: 'purple'}} >
          <h5 className="card-name">Name: {user.name.first} {user.name.last} </h5>
          <h5 className='card-Gender'>Gender: {user.gender} </h5>
          <h5 className='card-email'>Email: {user.email} </h5>
          <h5 className='card-age'>Age: {user.dob.age} </h5>
          <p className='text-center'><button class="btn btn-primary" onClick = {() => setUserAge()}>Toggle Age</button></p>
        </div>
      </div>
    </div>
  </div>

      ))}
        </>
    );}
  
        
export default Main;



