import React from 'react'
import PaintingModal from '../PaintingModal/PaintingModal'

function Painting({data}) {
    
  let objectLength = Object.keys(data).length
  let array=[];
  for(let i=1; i<objectLength; i++){
    array = [...array, i];
  }
  
  return (
    <div>
      {array.map(e => {
        return <PaintingModal photo={data[e]} />
      })}
    </div>
  )
}

export default Painting