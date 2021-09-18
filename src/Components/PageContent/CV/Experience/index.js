import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import TextField from '../Inputs/TextField';
import './Experience.scss'; 
import TextArea from '../Inputs/TextArea';

export default function Experience({item, index, experiance, setExperiance}) {
    const [focused, setFocused] = useState(false)
    const [selected, setSelected] = useState(false)
    function updateItem(key, value){
        let newArray = [...experiance]
        newArray[index][key]=value
        setExperiance(newArray)
    }

    

    function addRow(){
        setTimeout(()=>{setFocused(false)}, 0)
        let newArray = [...experiance]
        newArray.push({
            title:'', 
            companyName:'',
            date:'',
            place: '',
            description:'',
            mistakes: []
        })
        setExperiance(newArray)
    }

    function removeRow(){
        let newArray = [...experiance]
        newArray.splice(index,1)
        setExperiance(newArray)
        if(newArray.length>0){
            setExperiance(newArray)
        }
        else{
            setExperiance([
                {
                    title:'', 
                    companyName:'',
                    date:'',
                    place: '',
                    description:'',
                    mistakes: []
                }])
                
        }
        setTimeout(()=>{setFocused(false)}, 0)
        
    }

  return (
      <>
        <div className={focused ? 'item focused' : 'item'} onMouseDown={()=>{setFocused(true)}}>
            {focused && 
                <AnimatePresence exitBeforeEnter>
                    {selected ? 
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='text-decoration'>
                        <button onClick={()=>document.execCommand('bold')}><img src="./bold.svg"/></button>
                        <button onClick={()=>document.execCommand('italic')}><img src="./italicize.svg"/></button>
                        <button onClick={()=>document.execCommand('underline')}><img src="./underline.svg"/></button>
                    </motion.div>
                    :
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='add-remove'>
                        <button className='add' onClick={addRow}><img src="./add.svg"/><p>New entry</p></button>
                        <button className='remove' onClick={removeRow}><img src="./Trash.svg"/></button>
                    </motion.div>
                    }
                    
                </AnimatePresence>
            }
            <TextField 
                placeholder='Title' 
                value={item.title} 
                onChange={(e) => updateItem('title', e.target.value)} 
                type='job-title' />
            <TextField 
                placeholder='Company Name' 
                value={item.companyName} 
                onChange={(e) => updateItem('companyName', e.target.value)} 
                type='company-name' />
            <div className='job-details-row'>
                <TextField 
                    placeholder='Date period' 
                    value={item.date} 
                    style={{minWidth: '67px'}}
                    onChange={(e) => updateItem('date', e.target.value)} 
                    type='job-details'
                    icon='./Calendar.svg' />
                <TextField 
                    placeholder='New York, NY' 
                    value={item.place} 
                    style={{minWidth: '80px'}}
                    onChange={(e) => updateItem('place', e.target.value)} 
                    type='job-details'
                    icon='./Location.svg' />
            </div>
            <TextArea
                placeholder='Company Description' 
                value={item.description} 
                setDesc={updateItem}
                descriptionMistakes={item.descriptionMistakes}
                index={index}
                mistakes={item.mistakes}
                setSelected={setSelected}  
                ></TextArea>
        </div>
        {focused && 
            <AnimatePresence exitBeforeEnter>
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={()=>{setFocused(false)}}
                className='tinted-background'></motion.div>
            </AnimatePresence>
        }
    </>
  );
}
