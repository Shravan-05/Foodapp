import React from 'react'

const Alert = (props) => {
  return (
    <>
          {props.info&&<div className={`alert alert-${props.info.type}`} role="alert">
{props.info.msg}
</div>}
</>
        
  )
}

export default Alert
