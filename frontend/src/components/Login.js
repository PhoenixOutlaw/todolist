import React from 'react'
// import { useDispatch } from 'react-redux';
// import  { login } from '../features/loginSlice';
// import { auth, provider } from '../firebase'
// import axios from './axios'
import Button from '@mui/material/Button';
import './css/login.css'




export const Login = () => {

//     const dispatch = useDispatch();

//    async function signin (){
//         auth.signInWithPopup(provider).then(   async ({user}) => {
//             var res =  await axios.post("/login",user);
//             console.log(await res.data);
//             dispatch(login(
//                 {   acc: res.data,
//                     email: user.email,
//                     photoURL: user.photoURL,
//                     displayName: user.displayName,
//                 }
//             ))
            
//         }).catch((error)=>alert(error));

//     }
    return (
        
            <div className="login">
            <img src="https://i.pinimg.com/originals/5e/81/9a/5e819a5ce865476b73087fd1276e7c3e.png" alt="" />
            <Button className='btn'>
                <img
                  src="https://img-authors.flaticon.com/google.jpg"
                  alt=""
                  style={{
                    objectFit: "contain",
                    width: "80px",
                    borderRadius: "100px",
                  }}
                />
              </Button> 
               <span></span> 
               <h5>log in with Google</h5>
        </div>
        
    )
} 
