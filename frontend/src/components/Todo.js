import React from 'react'
import "./css/todo.css"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

export const Todo = ({title,desc,ddate}) => {
    return (
        <div className="tdcnt">
            <h2>{title}</h2>
            <p>{desc}</p>
            <p style={{fontSize:"11px",textAlign:"right"}}>{ddate}</p>
            <div>
                <IconButton style={{color:"#1bff0078"}}>
                <EditIcon/>
                </IconButton>
                
                <IconButton style={{color:"#ff000085",marginLeft:"10px"}}>
                <DeleteIcon/>
                </IconButton>

            </div>

            
        </div>
    )
}
