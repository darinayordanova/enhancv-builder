import './InfoRow.scss'; 

function InfoRow() {
  return (
    <div className="row">
      <div className='info-label-left'>
        <p className='label'>Resume name: </p>
        <p>Jordan Smith’s resume</p>
      </div>
      <div className='info-label-right'>
        <p className='label'>Saved </p>
        <img src='./Check.svg'/>
        <p>Jordan Smith’s resume</p>
      </div>
    </div>
  );
}

export default InfoRow;