import React, { useState, useEffect } from "react";
import './Mistakes.scss'
import { motion, AnimatePresence } from "framer-motion";
import MistakesPopUp from "./MistakePopUp";
export default function Mistakes({item, index, allMistakes, change, i}) {
  const [hovered, setHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const updateMousePosition = ev => {
    setMousePosition({ x: ev.clientX, y: ev.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);
  useEffect(()=>{

    if(mousePosition.y>document.getElementById(`mistake${i}-${index}`).getBoundingClientRect().top 
    && mousePosition.y<document.getElementById(`mistake${i}-${index}`).getBoundingClientRect().top+allMistakes[index]['height'] 
    && mousePosition.x>document.getElementById(`mistake${i}-${index}`).getBoundingClientRect().left 
    && mousePosition.x<document.getElementById(`mistake${i}-${index}`).getBoundingClientRect().left+allMistakes[index]['width']){
      let allMistakesLocal = [...allMistakes];
      if(allMistakesLocal[index]['hovered'] !== true){
        //only the inner one to be hovered
        let innerHovered = allMistakesLocal.findIndex((item)=> item.hovered === true)
        if(innerHovered!=-1){
          allMistakesLocal[innerHovered]['hovered'] = true
        }
        else{
          allMistakesLocal[index]['hovered'] = true

        }
        change(allMistakesLocal)
      }
      
      
      setHovered(true)
    }
    else{
      let allMistakesLocal = [...allMistakes];
      if(allMistakesLocal[index]['hovered'] !== false){
        allMistakesLocal[index]['hovered'] = false
        change(allMistakesLocal)
      }
      setHovered(false)
      
    }
  },[mousePosition])


  return (
    <div id={`mistake${i}-${index}`} className={`mistake ${allMistakes[index]['hovered'] ? 'hov' : "not"} ${!hovered && allMistakes[index]['isWholeRow'] ? 'whole' : '' }`}
     style={{width: allMistakes[index]['width'], height: allMistakes[index]['height'], top: allMistakes[index]['top'], left: allMistakes[index]['left']}}>
     {allMistakes[index]['hovered'] ? 
     <AnimatePresence exitBeforeEnter>
       <motion.div
       style={{zIndex: 10}}
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       exit={{ opacity: 0 }}>
       <MistakesPopUp msg={allMistakes[index]['message']}/>
       </motion.div>
       </AnimatePresence> : ''}
    </div>
  );
}
