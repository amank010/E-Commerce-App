// import React, { useContext, useEffect, useState } from 'react'
// import { products } from '../assets/assets';
// import { ShopContext } from '../context/ShopContext';
// import Title from './Title';

// const BestSeller = () => {

//     const{products}=useContext(ShopContext);
//     const[bestSeller,setBestSeller]=useState([]);

//     useEffect(()=>{ 
//         const bestProduct=products.filter((item)=>(item.bestseller));
//         setBestSeller(bestProduct.slice(0,5))
//     },[])

//   return (
//     <div className='my-10'>
//         <div className='text-center text-3x1 py-8'>
//             <Title text1={'BEST'} text2={'SELLERS'} />
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid rerum labore accusamus! Illo, animi? Enim illum labore minima? Eius sapiente voluptas et incidunt inventore nihil ducimus porro ullam provident placeat!</p>
//         </div>
//     </div>
//   )
// }

// export default BestSeller
