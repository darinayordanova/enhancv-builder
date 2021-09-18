import React, { useState, useEffect } from "react";
import './MistakesPopUp.scss'
export default function MistakesPopUp({msg}) {
  
  return (
    <div className='pop-over'>
        <div className='heading'>
            <div>
                <img src='./List-Bullet.svg'/>
                <h3>Content Improvement</h3>
            </div>
            <div>
                <div className='checkbox'>

                </div>
                <p className='ignore'>ignore</p>
            </div>
        </div>
        <p className="content">{msg}</p>
    </div>
  );
}
