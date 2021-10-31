import { Avatar, IconButton } from '@mui/material'
import AddBoxIcon from '@mui/icons-material/AddBox';
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import {useForm} from 'react-hook-form'
import './css/main.css'
import { Todo } from './Todo'


export const Main = () => {
    const [newtd, setnewtd] = useState(false)
    const {handleSubmit, register ,formState:{errors}} = useForm();

    const submit = (values) => {  console.log(values)}
    return (
        <div className="mcnt">
            <div className="ml">
                <Avatar id="mrava"/>
                <h2 style={{margin:"0",fontWeight:"400"}}>user name</h2>
                <h3 style={{margin:"0",fontWeight:"400"}}>user email</h3>

            </div>
            <div className="mtdl">
                <h2>Tasks</h2>
               <div className="tl">
                   <Todo
                     title="lorem ipsum dolor sit amet, consectetur"
                     desc="lorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consectetur"
                     ddate="10oct"
                   />
                   <Todo
                     title="lorem ipsum dolor sit amet, consectetur"
                     desc="lorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consectetur"
                     ddate="10oct"
                   />
                   <Todo
                     title="lorem ipsum dolor sit amet, consectetur"
                     desc="lorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consectetur"
                     ddate="10oct"
                   />
                   <Todo
                     title="lorem ipsum dolor sit amet, consectetur"
                     desc="lorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consectetur"
                     ddate="10oct"
                   />
               </div>
                   <div className="add" onClick={()=>setnewtd(true)}>
                       <AddBoxIcon style={{color:"gray"}}/>
                   </div>

            </div>

            {newtd&&
            <div className="newtd">
                <CloseIcon id="close" onClick={()=>setnewtd(false)} />
                <h2>Add new task</h2>
                <form onSubmit={handleSubmit(submit)}>
                    <input type="text" placeholder="Title" {...register('title',{required:'Required', pattern: {message: "invalid email address"}})} />
                    {errors.title && errors.title.message}
                    <textarea placeholder="Description" {...register('desc',{required:'Required'})}></textarea>
                    {errors.desc && errors.desc.message}
                    <input type="date" {...register('due')}/>
                    <button type="submit" id="addbtn"><AddBoxIcon /></button>
                </form>
            </div>
            }
            
        </div>
    )
}
