import React from 'react'
// import { Navigate } from 'react-router-dom';
import './profile.css'
import LoginPage from '../Login/LoginPage';

const ProfilePage = (props) => {
    const handleLogout=()=>{
        localStorage.removeItem('Login Token');
    }
  return (
   <>
   {
       props.login ?
        <div className='PageBody'>

      <div className='container profile'>
  <div className='row'>
    <div className='col-4'>
      <div className='leftSideProfile'>
         <div className='image'>
           <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnogHpwg2fmNkFPwKRED1UXbV7jopP78tGtg&usqp=CAU' alt='profile' />
         </div>
      </div>
    </div>
    <div className='col-8'>
<div className='leftSideProfile'>
<h1>Name : <span>1</span> <span>2</span></h1>
<h2>Email : <span></span></h2>
<h2>Phone-Number : <span></span></h2>
<h2>Role : <span></span></h2>
</div>
    </div>
  </div>
      </div>
        <button onClick={handleLogout}>logout</button>
        </div>
        :
        // <Navigate to="/login" />
        <LoginPage/>
   }
    
   </>
  )
}

export default ProfilePage