import React, { useState, useEffect, useRef } from 'react';
import './App.css';

export default function App(){
  const images = [
    {id: 0, title: "Batman", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSbOUUTcDopkWjVmeBc4JZW7DWHD0USPgAOAVCpfBYQA&s"},
    {id: 1, title: "Superman", url: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2013/02/211292-ya-hemos-re-leido-all-star-superman.jpg?tf=3840x"},
    {id: 2, title: "WonderWoman", url: "https://www.hellofriki.com/wp-content/uploads/2017/06/ww3.jpg"}
  ]

  const [image, setImage] = useState(0);
  const timerId = useRef(null);

  const imageCard = <ImageCard source={images[image]} key={images[image].id} />

  const buttons = images.map(img => 
    <button 
      key={img.id} 
      onClick={() => setImage(img.id)} 
      className='Selector'
      id={'Selector' + img.id}
    />
  )

  function advance(){
    const lastPhoto = images.length - 1;
    const index = image === lastPhoto ? 0 : image + 1;
    setImage(index);
  }
  function goBack(){
    const firstPhoto = 0;
    const lastPhoto = images.length - 1;
    const index = image === firstPhoto ? lastPhoto : image - 1;
    setImage(index);
  }

  useEffect(() =>{
    timerId.current = window.setInterval(() => {
      advance();
    }, 5000);
    return () => clearInterval(timerId.current);
  })

  return (
    <section className='Container'>
      {imageCard}
      <button onClick={goBack} className='Button' id='previous'>Previous</button>
      {buttons}
      <button onClick={advance} className='Button' id='next'>Next</button>  
    </section>
  )
}

function ImageCard({ source }){
  const { title, url } = source;

  return(
    <div className='Card'>
      <img src={url} />
    </div>
  )
}