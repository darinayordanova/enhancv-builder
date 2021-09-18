import React, { useState, useEffect, useRef } from 'react';
import './CV.scss'; 
import Experience from './Experience';
import TextField from './Inputs/TextField';

function CV() {
    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [website, setWebsite] = useState('')
    const [location, setLocation] = useState('')
    const [experiance, setExperiance] = useState([
        {
            title:'', 
            companyName:'',
            date:'',
            place: '',
            description:'',
            mistakes: []
        }])
  return (
    <div className="cv-wrapper">
        <div className="cv-header">
            <div className="left-col">
                <TextField placeholder='YOUR NAME' 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    type='name' />
                <TextField placeholder='Your next desired role?' 
                    value={role} 
                    onChange={(e) => setRole(e.target.value)} 
                    type='role' />
                <div className='icon-inputs'>
                    <TextField placeholder='Phone' 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)} 
                        type='contact'
                        icon='./Phone.svg' />
                    <TextField placeholder='Email' 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        type='contact'
                        icon='./Mail.svg' />
                    <TextField placeholder='Website/Link' 
                        value={website} 
                        onChange={(e) => setWebsite(e.target.value)} 
                        type='contact'
                        icon='./Link.svg' />
                    <TextField placeholder='Location' 
                        value={location} 
                        onChange={(e) => setLocation(e.target.value)} 
                        type='contact'
                        icon='./Location.svg' />
                </div>
            </div>
            <div className="right-col">
                <img src='./User2.svg'/>
            </div>
        </div>
        <div className='cv-content'>
            <div className="experience">
                <h2 className='section-heading'>EXPERIENCE</h2>
                <div className='list'>
                    
                    
                    {experiance.map((item, index)=>{
                        return(
                            <Experience item={item} index={index} key={'exp'+index} experiance={experiance} setExperiance={setExperiance} />
                        )
                    })}
                </div>
            </div>
        </div>
        
    </div>
  );
}

export default CV;