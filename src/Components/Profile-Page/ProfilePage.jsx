import React,{useState} from 'react'
import './profile.css'
import LoginPage from '../Login/LoginPage';
import { toast } from 'react-toastify';

const ProfilePage = () => {
  const[isLogin,setIsLogin]=useState(localStorage.getItem('Login Token')===null)
    const handleLogout=()=>{
        localStorage.removeItem('Login Token');
        setIsLogin(true)
        toast("You logged out successfully!")
    }
    // let token=localStorage.getItem('Login Token')
    // if(token===null){
    //   setIsLogin(false)
    // }
    // else if(!token===null){
    //   setIsLogin(true)
    // }
  return (
   <>
   {
       !isLogin ?
        <div className='PageBody'>

      <div className='container profile'>
  <div className='row'>
    <div className='col-lg-4  col-sm-6 leftSide'>
      <div className='leftSideProfile'>
         <div className='image mx-auto my-auto'>
           <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnogHpwg2fmNkFPwKRED1UXbV7jopP78tGtg&usqp=CAU' alt='profile' />
         </div>
      </div>
    </div>
    <div className='col-lg-8  col-sm-6 rightSide px-4 mt-2'>
<div className='rightSideProfile'>
<h1 className='keyPair'>Name : <span className='valuePair'>Harpreet Kaur</span></h1>
<h2 className='keyPair'>Email : <span className='valuePair'>harpreet@gmail.com</span></h2>
<h2 className='keyPair'>Phone-Number : <span className='valuePair'>8968955198</span></h2>
<h2 className='keyPair'>Role : <span className='valuePair'>User</span></h2>
</div>
    </div>
  </div>
  <div className='logoutButton'><button className='btn ' onClick={handleLogout}>Logout</button></div>
      </div>
        
        </div>
        :
        // <Navigate to="/login" />
        <LoginPage/>
   }
    
   </>
  )
}

export default ProfilePage