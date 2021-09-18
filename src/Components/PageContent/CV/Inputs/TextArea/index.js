import React, { useState, useEffect, useRef } from 'react';
import './TextArea.scss'
import Mistakes from '../../Mistakes';

export default function TextArea({
    setDesc, 
    value,
    placeholder,
    index,
    setSelected,
    mistakes
}) {

  const state = useRef({ value, prevValue: null, key: null });
  const [mistakesList, setMistakesList]=useState([])
  if (state.current.prevValue !== value) {
    state.current.value = value;
    state.current.key = Date.now();
  }
  
  function isSelected(){
    var text = "";
    if (typeof window.getSelection != "undefined") {
      text = window.getSelection().toString();
    } else if (typeof document.selection != "undefined" && document.selection.type == "Text") {
      text = document.selection.createRange().text;
    }
    if (text) {
      setSelected(true)
      
    }
    else{
      setSelected(false)
    }
  }

  function changeInput(val){
    let mist=[]
    if(val.target.innerText == `I've done many projects`){
      mist=[
        {
          "range": [10,23],
          "message": "This is vague. Instead of “Managed projects for many clients”, say “Managed projects for 10 clients including BlueBank.”"
        },
        {
          "range": [0,23],
          "message": "Include a valuable metric if possible. For example: \"Increased revenue by 20% within one month.\"."
        }
      ]
      setDesc('mistakes', mist)
    }
    else{
      setDesc('mistakes', [])
    }
    if(mist.length>0){
      let newStr = val.target.innerHTML
      mist.map((item)=>{
        if(item.range[0] === 0 && item.range[1] === val.target.innerText.length){
          newStr = `<span id="err${index}-${item.range[0]}-${item.range[1]}">${newStr}</span>`
        }
        else{
          let subStr = val.target.innerText.substring(item.range[0], item.range[1])
          newStr = newStr.replace(subStr, `<span id="err${index}-${item.range[0]}-${item.range[1]}">${subStr}</span>`)
        }

      }
      )
      setDesc('description', newStr)
        state.current.prevValue = newStr

    }
    else{
      setDesc('description', val.target.innerHTML)
      state.current.prevValue = val.target.innerHTML
    }
  }

  useEffect(()=>{

    //Clone the div
    let i = document.getElementById(`wrapper-${index}`).cloneNode(true)
    document.getElementById("secretDiv").innerHTML= document.getElementById(`wrapper-${index}`).innerHTML
    let el = document.getElementById("secretDiv")
    el.getElementsByClassName(`cont-${index}`)[0].innerHTML = value

    //get the positions of the mistakes
    let allMistakes=[]
    mistakes.map((item)=>{
      let span = el.getElementsByClassName(`cont-${index}`)[0].querySelector(`#err${index}-${item.range[0]}-${item.range[1]}`)
      let left = span?.offsetLeft - span?.scrollLeft
      let top = span?.offsetTop - span?.scrollTop
      let width = span?.offsetWidth
      let height = span?.offsetHeight

      allMistakes.push({
        range: item.range,
        isWholeRow: item.range[0]==0 && item.range[1]===document.getElementById(`wrapper-${index}`).innerText.length ? true : false,
        top: top,
        left: left,
        width: width,
        height: height,
        message: item.message,
        hovered: false
      })
    })
    
    setMistakesList(allMistakes)
  },[value])
  
  return (
    <div style={{position: 'relative'}}>
      <div id='secretDiv'></div>
      <div className="wrapper-mistakes" 
      style={{width: document.getElementById("secretDiv")?.width, height: document.getElementById("secretDiv")?.height}}>
        {mistakesList.map((item, key)=> <Mistakes index={key} i={index} item={item} 
        allMistakes={mistakesList} 
        change={setMistakesList}/>)}
      </div>
      <div id={`wrapper-${index}`} >
        <div 
        className={`divtext cont-${index}`} 
        id={`content-${index}`} 
        contentEditable={true} 
        key={state.current.key}
        suppressContentEditableWarning={true}
        dangerouslySetInnerHTML={{ __html: state.current.value }}
        placeholder={placeholder} 
        spellCheck={false}
        onInput={(val)=>changeInput(val)} 

        onMouseUp={isSelected} 
        onKeyUp={isSelected} 
        onDragStart={isSelected}
        onClick={isSelected}
        onBlur={isSelected}
        onChange={isSelected}
        onKeyDown={isSelected}
        onKeyPress={isSelected}
        onMouseMove={isSelected}
        onMouseOver={isSelected}
        onPaste={isSelected} >
        </div>
      </div>
      


    </div>
  );
}