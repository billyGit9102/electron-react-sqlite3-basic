import React from 'react';

const content = (props) => {
  var a=7;
  console.log(a);
  return(
    <textarea name="" id="" cols="30" rows="10" onChange={ (e)=>props.change(e.currentTarget.value)}></textarea>
  )
}

export default content;