import React from 'react';
import image from '../assets/eden.jpg';
function Logos() {
  return (
   <section className="flex flex-col justify-center mt-9 p-3" >
   <img className="mx-auto pb-5 flex justify-center" src={image}  />
   </section>
  );
}

export default Logos;