import './TextField.scss'

export default function TextField({
    value, 
    onChange, 
    placeholder, 
    type, //name, role, contact, job-title, company-name, job-details
    icon,
}) {
  return (
    <>
      { icon ?
          <div className={`input-icons-row ${type=='job-details' && 'job-det'}`}>
            <img src={icon} className={value && 'solid'}/>
            <input type='text' //ToDo diff types
              placeholder={placeholder} 
              style={{width: type=='job-details' ? value.length!=0 ? `${(value.length+1)*8}px` : `${(placeholder.length+1)*8}px` : "auto"}}
              value={value} 
              onChange={onChange} 
              className={`input-item ${type}`} 
             />
          </div>
          :<input type='text' 
          placeholder={placeholder} 
          value={value} 
          onChange={onChange} 
          className={`input-item ${type}`} />
        }
    </>
  );
}