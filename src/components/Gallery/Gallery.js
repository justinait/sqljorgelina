import React from 'react'
import Painting from '../Painting/Painting'
import './Gallery.css'

function Gallery({dataImages}) {
  return (
    <div className='gallery'>
      {/* <p className='serieTitle'>Nombre de la serie</p> */}
      <div className='galleryContainer'>
        {      
          dataImages.map((e, i) => {
          return (
            <Painting key={e.id+i} data={e}/>
          )
          })
        }
      </div>
    </div>
      
  )
}

export default Gallery

// <div className='gallery'>
    //     <p className='serieTitle'>Nombre de la serie</p>
    //     <div className='galleryContainer'>
    //         <img className='galleryPainting' src='./carousel/landscape(24).jpg'    alt="" />
    //         <img className='galleryPainting' src='./carousel/landscape(24).jpg'    alt="" />
    //         <img className='galleryPainting' src='./carousel/landscape(24).jpg'    alt="" />
    //         <img className='galleryPainting' src='./carousel/landscape(24).jpg'    alt="" />
    //         <img className='galleryPainting' src='./carousel/landscape(24).jpg'    alt="" />
    //         <img className='galleryPainting' src='./carousel/landscape(24).jpg'    alt="" />
    //         <img className='galleryPainting' src='./carousel/landscape(24).jpg'    alt="" />
    //         <img className='galleryPainting' src='./carousel/landscape(24).jpg'    alt="" />
    //     </div>
    // </div>
    