// Dashboard Normal Curved Button Component
export default function DNormalButton(props) {
  if (props.type === "normal") {
    return (
      <a href="/dashboard">
        <button  
        style={{cursor: 'pointer', marginTop: '30px'}} 
        className="dNormBtn">{props.value}</button>
      </a>
    );
  } else if (props.type === "invert") {
    return (
      <a href="/dashboard">
        <button style={{cursor: 'pointer', marginTop: '30px'}} className="dNormBtn invertedBtn">{props.value}</button>
      </a>
    );
  } else {
    return (
      <a href="/dashboard">
        <button style={{cursor: 'pointer', marginTop: '30px'}} className="dNormBtn">{props.value}</button>
      </a>
    );
  }
}
