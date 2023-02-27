import React, { useEffect, useState } from 'react'
import db from '../../firebaseConfig';
import { getDocs, collection } from 'firebase/firestore'
import { useParams } from 'react-router-dom';
import Gallery from '../Gallery/Gallery';

function GalleryContainer() {
    
  const [listPaintings, setListPaintings] = useState([])
  const { category } = useParams();

  const getPaintings = async () => {
    const paintingCollection = collection(db, 'paintings')
    const paintingSnapshot = await getDocs(paintingCollection)

    const categoryList = paintingSnapshot.docs.map( (e) => {
      let categoryPaintings = e.data();
      categoryPaintings.id = e.id;

      return categoryPaintings;

    })

    if(category){

      let paintingsImages = categoryList.filter( (e) => {
        return e.id == category
      })
      
      paintingsImages.map(e => {        
        return e        
      })

      let array = Object.values(paintingsImages)
      console.log(array)

      return array//aca vas a tener q mapear este paintings images hasta q no haya mais
    }

  }

  useEffect(() => {
    
    getPaintings()
      .then( (res) => { 
        setListPaintings(res)
      })
          
  }, [category])


  return(
    <div>
      <Gallery dataImages={listPaintings}/>
    </div>
  )
}

export default GalleryContainer